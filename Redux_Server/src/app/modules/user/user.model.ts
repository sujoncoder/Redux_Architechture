import { model, Schema } from "mongoose";
import { Role, type IUser } from "./user.interface";



// USER SCHEMA
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.USER, uppercase: true },
}, {
    timestamps: true,
    versionKey: false
});

export const User = model<IUser>("User", userSchema);