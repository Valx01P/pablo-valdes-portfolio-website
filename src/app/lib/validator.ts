import * as z from "zod"

export const emailFormSchema = z.object({
    email: z.string().email({ message:"Enter a valid email address" }),
    firstName: z.string().min(2, { message: "First Name must be at least 2 characters long"}),
    lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long"}),
    message: z.string().min(10, { message: "Message must be at least 10 characters long"}),
    phone: z.string().optional(),
    subject: z.string().min(4, { message: "Subject must be at least 4 characters long"})
})