import { z } from "zod"

const urlPattern = /(https?:\/\/|www\.)/i
const htmlTagPattern = /<[^>]+>/
const phonePattern = /^\+?\d{10,15}$/

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name must be 80 characters or fewer"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .refine((value) => phonePattern.test(value.replace(/[\s\-()]/g, "")), "Please enter a valid phone number"),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be 1000 characters or fewer")
    .refine((value) => !urlPattern.test(value), "Links are not allowed in the message")
    .refine((value) => !htmlTagPattern.test(value), "HTML is not allowed in the message"),
  website: z.string().trim().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
