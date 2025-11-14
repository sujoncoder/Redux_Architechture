import bcrypt from "bcryptjs";
import { SECRET } from "../config/env";
import { User } from "../modules/user/user.model";
import { Role, type IUser } from "../modules/user/user.interface";


// SEED ADMIN
export const seedAdmin = async () => {
    try {
        const isAdminExist = await User.findOne({ email: SECRET.ADMIN_EMAIL });

        if (isAdminExist) {
            console.log("⚠️  Admin Already Exist!");
            return;
        };

        console.log("🔁 Trying to create Admin...");

        const hashedPassword = await bcrypt.hash(SECRET.ADMIN_PASSWORD, SECRET.BCRYPT_SALT_ROUND);

        const payload: IUser = {
            name: "Admin",
            email: SECRET.ADMIN_EMAIL,
            password: hashedPassword,
            role: Role.ADMIN,
            isBlocked: false
        };

        await User.create(payload);
        console.log("🦸  Admin Created Successfuly! \n");

    } catch (error: any) {
        console.log(error);
    }
};