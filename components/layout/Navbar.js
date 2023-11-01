import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="w-full h-[64px] bg-primary mt-auto">
      <div className="resContainer h-full flex justify-between items-center">
        <div className="flex-1 flex gap-x-12 items-center">
          <Link href="/">
            <span className="text-white text-xl font-semibold">RandoStore</span>
          </Link>
          <ul className="list-none">
            <li className="inline-block mr-6">
              <Link href="/">
                <span className="text-[15px] font-light text-white">Home</span>
              </Link>
            </li>
            <li className="inline-block mr-6">
              <Link href="/shop">
                <span className="text-[15px] font-light text-white">Shop</span>
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/checkout">
                <span className="text-[15px] font-light text-white">Checkout</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-7 items-center">
          <Cart />
          <Link href="/add-item">
            <button className="text-sm text-primary bg-white px-5 h-[35px] rounded-lg">
              Add items
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
