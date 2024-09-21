import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import React from "react";

interface CardProps {
  imgSrc: string;
  link: string;
  alt: string;
  height?: number;
  width?: number;
  title: string;
  price: number;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imgSrc,
  link,
  alt,
  height,
  width,
  title,
  price,
  className,
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <Image src={imgSrc} alt={alt} height={height} width={width} />
      <a href={link}>
        <span className="font-bold text-md text-slate-700">{title}</span>
      </a>
      <span className="font-black text-slate-500 text-sm">${price}</span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="bg-yellow-400 font-bold h-10 flex justify-center items-center text-sm">
        <span>FREE Shipping On All Products!</span>
      </div>
      {/* Nav */}
      <nav className="border h-[150px] flex items-center justify-between">
        <Image alt="logo" />
        <ul className="flex gap-8">
          <li>Men&apos;s</li>
          <li>Women&apos;s</li>
          <li>Hoodies</li>
          <li>Hats</li>
          <li>Mugs</li>
        </ul>
        <div className="flex">
          <Image alt="Search" />
          <Image alt="Account" />
          <Image alt="Cart" />
          <span>USD</span>
        </div>
      </nav>
      {/* Hero */}
      <section className="border h-[500px]"></section>
      {/* Featured Products */}
      <section className={cn("flex flex-col items-center")}>
        <p className="uppercase font-bold">Featured Products</p>
        <div className="flex gap-5">
          <Card
            imgSrc=""
            link=""
            alt=""
            height={200}
            width={200}
            title="Warning Rant"
            price={19.99}
            className="border"
          />
          <Card
            imgSrc=""
            link=""
            alt=""
            height={200}
            width={200}
            title="Warning Rant"
            price={19.99}
            className="border"
          />
          <Card
            imgSrc=""
            link=""
            alt=""
            height={200}
            width={200}
            title="Warning Rant"
            price={19.99}
            className="border"
          />
          <Card
            imgSrc=""
            link=""
            alt=""
            height={200}
            width={200}
            title="Warning Rant"
            price={19.99}
            className="border"
          />
          <Card
            imgSrc=""
            link=""
            alt=""
            height={200}
            width={200}
            title="Warning Rant"
            price={19.99}
            className="border"
          />
        </div>
      </section>
      {/* Featured Collections */}
      <section className="flex flex-col items-center">
        <div className={cn("flex flex-col items-center")}>
          <p className="uppercase font-bold">Featured Collection</p>
          <div className="flex gap-5">
            <Card
              imgSrc=""
              link=""
              alt=""
              height={200}
              width={200}
              title="Warning Rant"
              price={19.99}
              className="border"
            />
            <Card
              imgSrc=""
              link=""
              alt=""
              height={200}
              width={200}
              title="Warning Rant"
              price={19.99}
              className="border"
            />
            <Card
              imgSrc=""
              link=""
              alt=""
              height={200}
              width={200}
              title="Warning Rant"
              price={19.99}
              className="border"
            />
            <Card
              imgSrc=""
              link=""
              alt=""
              height={200}
              width={200}
              title="Warning Rant"
              price={19.99}
              className="border"
            />
            <Card
              imgSrc=""
              link=""
              alt=""
              height={200}
              width={200}
              title="Warning Rant"
              price={19.99}
              className="border"
            />
          </div>
        </div>
        <button className="uppercase py-3 px-4 bg-sky-800 text-white text-sm font-bold">
          View All
        </button>
      </section>
      {/* Newsletter */}
      <section className="flex flex-col items-center">
        <h2 className="uppercase text-center font-bold tracking-widest">
          Enter your email address for 10% off new designs!
        </h2>
        <p className="text-center text-slate-500">
          You&apos;ll be the first to know about news, new designs, new
          philosophical blog posts, and a 10% discount for the first week a new
          design is uploaded!
        </p>
        <div className="flex">
          <input
            className="border border-slate-500"
            placeholder="Email address"
          />
          <button className="uppercase py-3 px-4 bg-sky-800 text-white text-sm font-bold">
            Subscribe
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-white bg-zinc-950">
        <div className="flex flex-col items-center">
          <p className="font-bold">Quick links</p>
          <ul className="flex gap-6 text-sm text-center text-neutral-700">
            <li>Search</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Affiliates</li>
            <li>Sizing, Info, and Care</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              Social links
            </div>
            <span className="text-xs">&copy; 2024,</span>
            <a href=""><span className="text-xs text-neutral-700"> Tides of Liberty</span></a>
          </div>
          <div>Cards</div>
        </div>
      </footer>
    </>
  );
}
