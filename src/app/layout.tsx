import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import React from "react";
import {
  AmericanExpress,
  ApplePay,
  CartIcon,
  DinersClub,
  Discover,
  Facebook,
  GooglePay,
  Instagram,
  LoginIcon,
  Logo,
  Mastercard,
  MetaPay,
  Paypal,
  Pinterest,
  SearchIcon,
  ShopPay,
  Twitter,
  Venmo,
  Visa,
  Youtube,
} from "../assets";
// import Facebook from '../assets/svg/facebook.svg'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tides of Liberty",
  description: "Libertarian-themed apparel company",
};

const Dropdown = ({ dropdownName, children }) => {
  return (
    <>
      <li className="relative group cursor-default">
        <span>{dropdownName}</span>
        <ul className="absolute -left-2 mt-2 w-48 bg-white rounded-sm shadow-lg group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-5 group-hover:visible z-10 invisible">
          {children}
        </ul>
      </li>
    </>
  );
};

const DropdownItem = ({ collectionLink, collectionName }) => {
  return (
    <>
      <li>
        <Link href={collectionLink}>
          <span className="block px-4 py-2 hover:bg-slate-100 hover:text-yellow-500">
            {collectionName}
          </span>
        </Link>
      </li>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Banner */}
        <Link href='/collections' className="bg-yellow-400 font-bold h-10 flex justify-center items-center text-sm hover:bg-yellow-500">
          <span>FREE Shipping On All Products!</span>
        </Link>
        {/* Nav */}
        <nav className="border-b h-[130px] flex items-center justify-between px-[4rem]">
          <Link href="/">
            <Image src={Logo} height={100} alt="logo" />
          </Link>
          <ul className="flex gap-8 text-sm tracking-wider text-slate-700">
            <Dropdown dropdownName="Men&#39;s">
              <DropdownItem
                collectionLink="/collections/t-shirts"
                collectionName="Regular T-Shirts"
              />
              <DropdownItem
                collectionLink="/collections/economy-tees"
                collectionName="Economy Tees"
              />
              <DropdownItem
                collectionLink="/collections/mens-triblend-shirts"
                collectionName="Tri-blend Shirts"
              />
              <DropdownItem
                collectionLink="/collections/long-sleeve-shirts"
                collectionName="Long Sleeve Shirts"
              />
              <DropdownItem
                collectionLink="/collections/mens-tank-tops"
                collectionName="Tank Tops"
              />
            </Dropdown>
            <Dropdown dropdownName="Women&#39;s">
              <DropdownItem
                collectionLink="/collections/womens-t-shirts"
                collectionName="Regular T-Shirts"
              />
              <DropdownItem
                collectionLink="/collections/economy-tees"
                collectionName="Economy Tees"
              />
              <DropdownItem
                collectionLink="/collections/womens-triblend-t-shirt"
                collectionName="Tri-blend shirts"
              />
              <DropdownItem
                collectionLink="/collections/long-sleeve-shirts"
                collectionName="Long Sleeve Shirts"
              />
              <DropdownItem
                collectionLink="/collections/womens-tank-tops"
                collectionName="Tank Tops"
              />
            </Dropdown>
            <Dropdown dropdownName="Hoodies">
              <DropdownItem
                collectionLink="/collections/heavy-hoodies"
                collectionName="Heavy Hoodies"
              />
              <DropdownItem
                collectionLink="/collections/light-hoodies"
                collectionName="Supersoft Light Hoodies"
              />
              <DropdownItem
                collectionLink="/collections/sweatshirts"
                collectionName="Sweatshirts"
              />
            </Dropdown>
            <Dropdown dropdownName="Hats">
              <DropdownItem
                collectionLink="/collections/dad-caps"
                collectionName="Dad Caps"
              />
              <DropdownItem
                collectionLink="/collections/snapback-caps"
                collectionName="Snapback Caps"
              />
              <DropdownItem
                collectionLink="/collections/beanies"
                collectionName="Beanies"
              />
            </Dropdown>
            <Dropdown dropdownName="Mugs">
              <DropdownItem
                collectionLink="/collections/mugs"
                collectionName="11oz"
              />
              <DropdownItem
                collectionLink="/collections/150z-mugs"
                collectionName="15oz"
              />
            </Dropdown>
          </ul>
          <div className="flex gap-6">
            <Link href="/search">
              <Image src={SearchIcon} height={25} alt="Search" />
            </Link>
            <Link href="/account/login">
              <Image src={LoginIcon} height={25} alt="Account" />
            </Link>
            <Link href="/cart">
              <Image src={CartIcon} height={25} alt="Cart" />
            </Link>
            <select className="text-sm cursor-pointer">
              <option value="usd">USD</option>
              <option value="aud">AUD</option>
              <option value="cad">CAD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="hkd">HKD</option>
              <option value="jpy">JPY</option>
            </select>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="text-white bg-zinc-950 pt-12 pb-8 px-12">
          <div className="flex flex-col items-center mb-[6rem] max-w-[60rem]">
            <p className="font-bold mb-6">Quick links</p>
            <ul className="flex gap-8 text-sm text-center text-neutral-700 text-nowrap flex-wrap justify-center tracking-wider">
              <li>
                <Link href="/search" className="hover:text-white">
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/refund-policy"
                  className="hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/shipping-policy "
                  className="hover:text-white"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms-of-service"
                  className="hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/pages/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pages/affiliates" className="hover:text-white">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/sizing-info-and-care"
                  className="hover:text-white"
                >
                  Sizing, Info, and Care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <div className="flex gap-8">
                <Link href="" className="hover:cursor-pointer group">
                  <Image
                    src={Facebook}
                    height={25}
                    width={25}
                    alt="Facebook link"
                  />
                </Link>
                <Link href="" className="hover:cursor-pointer group">
                  <Image
                    src={Twitter}
                    height={25}
                    width={25}
                    alt="Twitter link"
                  />
                </Link>
                <Link href="" className="hover:cursor-pointer group">
                  <Image
                    src={Pinterest}
                    height={25}
                    width={25}
                    alt="Facebook link"
                  />
                </Link>
                <Link href="" className="hover:cursor-pointer group">
                  <Image
                    src={Instagram}
                    height={25}
                    width={25}
                    alt="Facebook link"
                  />
                </Link>
                <Link href="" className="hover:cursor-pointer group">
                  <Image
                    src={Youtube}
                    height={25}
                    width={25}
                    alt="Facebook link"
                  />
                </Link>
              </div>
              <div className="flex gap-2">
                <Image
                  src={AmericanExpress}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={ApplePay}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={DinersClub}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={Discover}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={MetaPay}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={GooglePay}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={Mastercard}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={Paypal}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={ShopPay}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={Venmo}
                  height={40}
                  width={40}
                  alt="American Express"
                />
                <Image
                  src={Visa}
                  height={40}
                  width={40}
                  alt="American Express"
                />
              </div>
            </div>

            <div>
              <span className="text-xs tracking-wider">&copy; 2024,</span>
              <Link
                href="/"
                className="text-xs text-neutral-700 hover:text-white tracking-wider"
              >
                {" "}
                Tides of Liberty
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
