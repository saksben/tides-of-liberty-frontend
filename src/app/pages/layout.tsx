import React from "react";

export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full flex justify-center">
      <div className="flex flex-col gap-5 w-4/5 max-w-[60rem] py-[4rem] tracking-wider">
        {children}
      </div>
    </main>
  );
}
