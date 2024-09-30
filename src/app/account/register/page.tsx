"use client";

import React from "react";
import { register } from "@/lib/utils/auth";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
    // Add post-registration logic
  };

  return (
    <main className="flex flex-col items-center py-[3rem] gap-6">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col gap-6 items-center"
      >
        <label htmlFor="email" className="text-sm tracking-wider w-full">
          Email
          <input
            type="email"
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
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-neutral-500 rounded-sm mt-1 block text-sm py-2 px-5 w-full"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 text-white font-bold tracking-widest uppercase text-sm rounded-sm bg-slate-500"
        >
          Create
        </button>
      </form>
    </main>
  );
};

export default Register;
