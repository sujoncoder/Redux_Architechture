import { Types } from "mongoose";

// ROLE ENUM TYPE
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
};

// USER TYPE
export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string
    role: Role;
};