"use client";

import { useActionState } from "react";
import { ArrowUpRight, Check } from "@/components/icons";
import { PLANS } from "@/lib/site";
import { sendContactMessage } from "./actions";
import { initialContactState, type ContactField } from "./form-state";

const labelClass = "text-[10px] uppercase tracking-[1.5px] text-[#5d516b]";
const inputClass =
  "mt-2 w-full border-b border-ink/25 bg-transparent pb-3 pt-1 text-[17px] leading-[27px] outline-none transition-colors placeholder:text-ink/35 focus:border-violet aria-[invalid=true]:border-[#b3261e]";

export function ContactForm({ defaultPlan }: { defaultPlan?: string }) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <div role="status" className="panel-enter flex flex-col items-start gap-5">
        <span className="flex size-12 items-center justify-center rounded-full bg-ink text-cream">
          <Check className="size-4" />
        </span>
        <h2 className="font-display text-[clamp(2rem,3.2vw,45px)] font-light leading-[1.14] tracking-[-0.03em]">
          Mensaje <strong className="font-medium text-violet">enviado.</strong>
        </h2>
        <p className="max-w-[440px] text-[17px] leading-[27.2px]">
          Gracias por escribirnos. Te responderemos lo antes posible para ver
          contigo el siguiente paso.
        </p>
      </div>
    );
  }

  function fieldProps(name: ContactField) {
    const error = state.errors?.[name];
    return {
      id: `contacto-${name}`,
      name,
      defaultValue: state.values?.[name],
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contacto-${name}-error` : undefined,
    };
  }

  function fieldError(name: ContactField) {
    const error = state.errors?.[name];
    if (!error) return null;
    return (
      <p id={`contacto-${name}-error`} className="mt-2 text-xs text-[#b3261e]">
        {error}
      </p>
    );
  }

  return (
    <form action={formAction} noValidate className="grid gap-9 sm:grid-cols-2">
      <div>
        <label htmlFor="contacto-name" className={labelClass}>
          Nombre
        </label>
        <input
          {...fieldProps("name")}
          type="text"
          autoComplete="name"
          required
          placeholder="Tu nombre"
          className={inputClass}
        />
        {fieldError("name")}
      </div>
      <div>
        <label htmlFor="contacto-email" className={labelClass}>
          Correo
        </label>
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          required
          placeholder="tu@correo.com"
          className={inputClass}
        />
        {fieldError("email")}
      </div>
      <div>
        <label htmlFor="contacto-phone" className={labelClass}>
          Teléfono (opcional)
        </label>
        <input
          {...fieldProps("phone")}
          type="tel"
          autoComplete="tel"
          placeholder="600 000 000"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contacto-plan" className={labelClass}>
          ¿Qué te interesa?
        </label>
        <select
          {...fieldProps("plan")}
          defaultValue={state.values?.plan ?? defaultPlan ?? "no-lo-se"}
          className={`${inputClass} h-[44px] cursor-pointer appearance-none rounded-none`}
        >
          {PLANS.map((plan) => (
            <option key={plan.value} value={plan.value}>
              {plan.label}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contacto-message" className={labelClass}>
          Cuéntanos tu proyecto
        </label>
        <textarea
          {...fieldProps("message")}
          required
          rows={5}
          placeholder="Qué haces, qué te gustaría mejorar, plazos…"
          className={`${inputClass} resize-y`}
        />
        {fieldError("message")}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="contacto-website">No rellenes este campo</label>
        <input
          id="contacto-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[330px] text-[11px] leading-[18.7px] text-[#706678]">
          Usaremos tus datos únicamente para responder a tu consulta.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex cursor-pointer items-center justify-between gap-[30px] rounded-full border border-ink bg-ink px-6 py-[18px] font-display text-sm leading-[18px] text-cream transition-colors hover:border-violet hover:bg-violet disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Enviar mensaje"}
          <ArrowUpRight className="size-[10px] shrink-0" />
        </button>
      </div>

      <p
        aria-live="polite"
        className="text-sm text-[#b3261e] empty:hidden sm:col-span-2"
      >
        {state.status === "error" ? state.message : null}
      </p>
    </form>
  );
}
