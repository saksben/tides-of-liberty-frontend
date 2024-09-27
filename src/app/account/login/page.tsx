import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col items-center py-[3rem] gap-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="w-1/2 flex flex-col gap-6 items-center">
        <label htmlFor="email" className="text-sm tracking-wider w-full">
          Email
          <input
            name="email"
            className="border border-neutral-500 rounded-sm mt-1 block text-sm py-2 px-5 w-full"
            type="email"
          />
        </label>
        <label htmlFor="password" className="text-sm tracking-wider w-full">
          Password
          <input
            name="password"
            className="border border-neutral-500 rounded-sm mt-1 block text-sm py-2 px-5 w-full"
            type="password"
          />
        </label>
        <Link href="" className="text-sm text-slate-500 tracking-wider">
          Forgot your password?
        </Link>
        <button type="submit" className="py-2 px-4 text-white font-bold tracking-widest uppercase text-sm rounded-sm bg-slate-500">
          Sign In
        </button>
        <Link href="" className=" text-slate-500 text-sm tracking-wider">Create account</Link>
      </form>
    </main>
  );
}
