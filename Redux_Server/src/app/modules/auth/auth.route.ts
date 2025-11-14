import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "../user/user.validation";
import { createUser } from "../user/user.controller";
import { getNewAccessToken, loginUser, logout } from "./auth.controller";



// AUTH ROUTES
export const authRoutes = Router()
    .post("/register", validateRequest(createUserZodSchema), createUser)
    .post("/login", loginUser)
    .post("/refresh-token", getNewAccessToken)
    .post("/logout", logout)