"use client";

import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import api from "../config/api";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {setIsLogin } = useAuthContext();

    const inputName = {
        name: '',
        email: '',
        password: '',
    };

    const [input, setInput] = useState(inputName);
    const inputHandle = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }))
    };

    const navigate = useNavigate();
    const submitRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('register', input);
            const data = res.data;


            if (data.success) {
                const token = data.token;
                localStorage.setItem('token', token);
                setInput(inputName)
                toast.success(data.message);
                setInput(inputName);
                setIsLogin(true)
                navigate('/home');

            }

        } catch (err) {

            toast.error(err.response.data.message)
            toast.error(err.response.data.name)

        }




    }


    return (
        <div className="h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            {/* Register Card */}
            <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-xl sm:p-10">

                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/30">
                            <User className="h-8 w-8 text-white" />
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Create Account
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Create your account and get started today
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitRegister} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Full Name
                            </label>

                            <div className="relative">
                                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    type="text"
                                    onChange={inputHandle}
                                    name="name"
                                    value={input.name}
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    onChange={inputHandle}
                                    name="email"
                                    value={input.email}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    onChange={inputHandle}
                                    name="password"
                                    value={input.password}

                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
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

                        {/* Terms */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-violet-600 focus:ring-violet-500"
                            />

                            <p className="text-sm leading-5 text-slate-400">
                                I agree to the{" "}
                                <span className="cursor-pointer text-violet-400 hover:text-violet-300">
                                    Terms & Conditions
                                </span>{" "}
                                and{" "}
                                <span className="cursor-pointer text-violet-400 hover:text-violet-300">
                                    Privacy Policy
                                </span>
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
                        >
                            Create Account

                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </form>

                    {/* Login */}
                    <p className="mt-7 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <NavLink to={'/'}>

                            <span className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300">
                                Login
                            </span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default RegisterPage