import z from "zod";
import { emailField, nameField, passwordField } from "../../zod/userZod";


// CREATE USER ZOD SCHEMA
export const createUserZodSchema = z.object({
    name: nameField,
    email: emailField,
    password: passwordField,
    role: z.enum(["ADMIN", "USER"]).optional(),
});