import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/api/auth.api";


const LoginPage = () => {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);


    // HANDLE SUBMIT
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login({ email, password }).unwrap();
            toast.success("Login successful 🎉");
            navigate("/dashboard");
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center py-30">
            <div className="w-full max-w-sm bg-white rounded-xl shadow p-8">
                <h2 className="text-2xl font-bold text-center text-slate-500 mb-6 font-mono">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="text-slate-600 font-medium font-mono">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-500 rounded-md  outline-none text-slate-500 font-mono placeholder:text-slate-400 placeholder:font-mono"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>

                    {/* PASSWORD FIELD */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="text-slate-600 font-medium font-mono"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-500 rounded-md  outline-none placeholder:text-slate-400 placeholder:font-mono"
                            placeholder={showPassword ? "password" : "********"}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center items-center gap-2 cursor-pointer text-white py-2 rounded-md shadow bg-blue-500 active:bg-blue-600 transition duration-300 ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading && <Loader2 className="animate-spin" size={18} />}
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;