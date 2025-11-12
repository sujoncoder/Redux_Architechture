import type { NextFunction, Request, Response } from "express";
import type { JwtPayload } from "jsonwebtoken";
import { ApiError } from "../errors/ApiError";
import { verifyToken } from "../utils/jwt";
import { SECRET } from "../config/env";


// CHECK AUTH MIDDLEWARE
export const checkAuth = (...roles: string[]) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            throw new ApiError(403, "No token received!");
        };

        const verifiedToken = verifyToken(token, SECRET.JWT_ACCESS_SECRET) as JwtPayload;


        if (!roles.includes(verifiedToken.role)) {
            throw new ApiError(403, "You are not permitted to access this route!");
        };

        req.user = verifiedToken;
        next();
    } catch (error) {
        next(error);
    }
};