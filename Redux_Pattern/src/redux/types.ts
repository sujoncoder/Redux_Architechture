export interface UserInfo {
    email: string;
    password: string;
};

export interface RegisterUserInfo extends UserInfo {
    name: string;
};

export interface User {
    id: string;
    name: string;
    email: string;
};