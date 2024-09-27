import React from "react";

export default function PolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full flex justify-center">
      <div className="flex flex-col gap-5 w-[600px] py-12 tracking-wider">
        {children}
      </div>
    </main>
  );
}
