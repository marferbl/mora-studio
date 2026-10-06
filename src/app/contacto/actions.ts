"use server";

import { PLANS } from "@/lib/site";
import type { ContactField, ContactState } from "./form-state";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = "Mora Studio <onboarding@resend.dev>";

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website")) {
    return { status: "success" };
  }

  const values: Record<ContactField, string> = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    plan: field(formData, "plan"),
    message: field(formData, "message"),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Dinos cómo te llamas.";
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Escribe un correo válido para poder responderte.";
  }
  if (values.message.length < 10) {
    errors.message = "Cuéntanos un poco más (al menos 10 caracteres).";
  }
  if (
    values.name.length > 120 ||
    values.email.length > 200 ||
    values.phone.length > 40 ||
    values.message.length > 5000
  ) {
    errors.message ??= "Alguno de los campos es demasiado largo.";
  }
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY and CONTACT_TO_EMAIL must be set.",
    );
    return {
      status: "error",
      message:
        "Ahora mismo no podemos enviar tu mensaje. Inténtalo de nuevo más tarde.",
      values,
    };
  }

  const plan =
    PLANS.find((option) => option.value === values.plan)?.label ??
    "Sin especificar";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: [to],
      reply_to: values.email,
      subject: `Nuevo contacto web: ${values.name}`,
      text: [
        `Nombre: ${values.name}`,
        `Correo: ${values.email}`,
        `Teléfono: ${values.phone || "—"}`,
        `Interés: ${plan}`,
        "",
        values.message,
      ].join("\n"),
    }),
  }).catch((error: unknown) => {
    console.error("Contact form: request to Resend failed.", error);
    return null;
  });

  if (!response?.ok) {
    if (response) {
      console.error(
        `Contact form: Resend responded ${response.status}.`,
        await response.text(),
      );
    }
    return {
      status: "error",
      message:
        "No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.",
      values,
    };
  }

  return { status: "success" };
}
