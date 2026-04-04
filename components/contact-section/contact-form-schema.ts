import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters long."),
  email: z.string().trim().email("Please provide a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
