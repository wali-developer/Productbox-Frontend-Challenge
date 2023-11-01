import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="resContainer">
      <div className="px-3 my-5">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Link href="/">
              <span className="text-xl font-semibold text-black">RandoStore</span>
            </Link>
            <div className="flex gap-x-6 items-center">
              <Link className="mx-auto mt-4 sm:mt-0 sm:mx-4 text-sm font-light" href="/shop">
                Shop
              </Link>
              <Link className="mx-4 md:block hidden text-sm font-light" href="#">
                Privacy Policy
              </Link>
              <Link className="mx-4 md:block hidden text-sm font-light" href="#">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t my-5"></div>
          <p className="text-[13px]">
            &copy; {new Date().getFullYear()} RandoStore Frontend challenge by{" "}
            <span className="font-medium">Wali Ullah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
