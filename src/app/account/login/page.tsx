"use client";

import { login } from "@/lib/utils/auth";
import Link from "next/link";
import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { access_token } = await login(email, password);
    localStorage.setItem("token", access_token);
    // Add post-login logic
     alert('Logged in!')
  };

  return (
    <main className="flex flex-col items-center py-[3rem] gap-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col gap-6 items-center"
      >
        <label htmlFor="email" className="text-sm tracking-wider w-full">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-neutral-500 rounded-sm mt-1 block text-sm py-2 px-5 w-full"
          />
        </label>
        <label htmlFor="password" className="text-sm tracking-wider w-full">
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-neutral-500 rounded-sm mt-1 block text-sm py-2 px-5 w-full"
            
          />
        </label>
        <Link href="" className="text-sm text-slate-500 tracking-wider">
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="py-2 px-4 text-white font-bold tracking-widest uppercase text-sm rounded-sm bg-slate-500"
        >
          Sign In
        </button>
        <Link href="/account/register" className=" text-slate-500 text-sm tracking-wider">
          Create account
        </Link>
      </form>
    </main>
  );
};

export default Login;
