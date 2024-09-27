import Link from "next/link";

export default function Cart() {
  return (
    <main className="flex flex-col items-center gap-5 py-[12rem]">
      <h1 className="text-3xl font-bold">Your cart</h1>
      <p className="text-sm tracking-widest text-slate-500">
        Your cart is currently empty.
      </p>
      <Link
        href="/"
        className="py-3 px-5 rounded-sm bg-slate-500 text-white uppercase text-sm tracking-widest font-bold"
      >
        Continue Shopping &rarr;
      </Link>
    </main>
  );
}
