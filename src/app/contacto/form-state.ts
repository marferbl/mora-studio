export type ContactField = "name" | "email" | "phone" | "plan" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = { status: "idle" };
