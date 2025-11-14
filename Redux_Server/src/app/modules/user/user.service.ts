import bcrypt from "bcryptjs";
import { SECRET } from "../../config/env";
import { User } from "../user/user.model";
import { ApiError } from "../../errors/ApiError";
import { HTTP_STATUS } from "../../constants/httpStatus";
import type { IUser } from "./user.interface";



// CREATE NEW USER SERVICE - (USER)
export const createUserService = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, "User already exist !");
    };

    const hashedPassword = await bcrypt.hash(password as string, SECRET.BCRYPT_SALT_ROUND);

    const user = await User.create({
        email,
        password: hashedPassword,
        ...rest,
    });

    const { password: pass, ...userWithOutPassword } = user.toObject();

    return userWithOutPassword;
};