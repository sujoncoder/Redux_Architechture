import { baseApi } from "@/redux/baseApi";
import type { UserInfo, RegisterUserInfo, User } from "@/redux/types";


// AUTH API ENDPOINTS
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, UserInfo>({
            query: (userInfo: UserInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),
        register: builder.mutation<User, RegisterUserInfo>({
            query: (userInfo: RegisterUserInfo) => ({
                url: "/user/register",
                method: "POST",
                body: userInfo,
            }),
        }),
        userInfo: builder.query<User, void>({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useUserInfoQuery,
    useLogoutMutation,
} = authApi;