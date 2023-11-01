import { GlobalContext } from "@/context/globalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <Link href="/checkout">
      <div className="w-[36px] h-[36px] flex justify-center items-center relative">
        <FiShoppingCart className="text-xl text-white" />
        {cart?.length > 0 && (
          <span className="w-[8px] h-[8px] bg-white rounded-full absolute top-1 right-0" />
        )}
      </div>
    </Link>
  );
};

export default Cart;
