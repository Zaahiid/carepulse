import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must be at less than 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Please enter a valid phone number"
    ),
});
