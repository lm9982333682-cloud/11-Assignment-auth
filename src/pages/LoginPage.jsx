
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, LogIn } from "lucide-react";
import { NavLink } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../config/api";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { setIsLogin } = useAuthContext();

    const inputName = {
        email: '',
        password: '',
    };
    const [input, setInput] = useState(inputName);
    const inputHandle = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }))
    };


    const submitLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('login', input);
            const data = res.data;


            if (data.success) {
                const token = data.token;
                localStorage.setItem('token', token)
                toast.success(data.message);
                setInput(inputName);
                setIsLogin(true);
                navigate('/home')


            }

        } catch (err) {

            toast.error(err.response)

        }






    }




    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-xl sm:p-10">

                    {/* Header */}
                    <div className="mb-8 text-center">

                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30">
                            <LogIn className="h-8 w-8 text-white" />
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-sm text-slate-400">
                            Login to your account to continue
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={submitLogin} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    onChange={inputHandle}
                                    value={input.email}
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label className="block text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    onChange={inputHandle}
                                    value={input.password}
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-12 pr-12 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">

                            <label className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-violet-600 focus:ring-violet-500"
                                />

                                <span className="text-sm text-slate-400">
                                    Remember me
                                </span>
                            </label>

                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
                        >
                            Login

                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </form>

                    {/* Register */}
                    <p className="mt-7 text-center text-sm text-slate-400">
                        Don't have an account?{" "}
                        <NavLink to={'/register'} >

                            <span className="cursor-pointer font-semibold text-violet-400 transition hover:text-violet-300">
                                Create Account
                            </span>
                        </NavLink>
                    </p>

                </div>
            </div>
        </div>
    );
};


export default LoginPage
