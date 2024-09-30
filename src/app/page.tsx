import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
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
    <main>
      {/* Hero */}
      <section className="border h-[480px]"></section>
      {/* Featured Products */}
      <section className={cn("flex flex-col items-center mt-[6rem]")}>
        <p className="uppercase font-bold text-slate-700 tracking-widest text-lg mb-[3rem]">
          Featured Products
        </p>
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
      <section className="flex flex-col items-center mt-[8rem]">
        <div className={cn("flex flex-col items-center")}>
          <p className="uppercase font-bold text-slate-700 text-lg tracking-widest mb-[3rem]">
            Featured Collection
          </p>
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
        <Link href="" className='my-[6rem]'>
          <button className="uppercase py-3 px-4 bg-slate-500 rounded-sm tracking-wider text-white text-sm font-bold">
            View All
          </button>
        </Link>
      </section>
      {/* Newsletter */}
      <section className="flex flex-col items-center py-[4rem] bg-slate-50 mb-[7rem] gap-3">
        <h2 className="uppercase text-center font-bold tracking-widest text-slate-700">
          Enter your email address for 10% off new designs!
        </h2>
        <p className="text-center text-slate-500 text-sm tracking-widest">
          You&#39;ll be the first to know about news, new designs, new
          philosophical blog posts, and a 10% discount for the first week a new
          design is uploaded!
        </p>
        <div className="flex w-1/2 mt-[3rem]">
          <input
            className="border border-slate-500 px-5 w-full text-sm tracking-wider"
            placeholder="Email address"
          />
          <Link href="">
            <button className="uppercase py-3 px-4 bg-slate-500 rounded-sm tracking-wider text-white text-sm font-bold">
              Subscribe
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
