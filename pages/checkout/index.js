import React, { useContext } from "react";
import TableViewItems from "@/components/checkout/TableViewItems";
import Link from "next/link";
import { GlobalContext } from "@/context/globalContext";

const Checkout = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(GlobalContext);

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
  };

  return (
    <main className="resContainer">
      <div className="mt-7 mb-12">
        <h1 className="text-xl text-[#333333] font-medium">Checkout</h1>
        {cart.length == 0 ? (
          <h1 className="text-center font-semibold text-base md:text-2xl my-20 text-AdmiPrimary">
            Your Cart is Empty!
          </h1>
        ) : (
          <section className="mb-8 mt-12">
            <div className="container flex flex-row items-start flex-wrap md:justify-between">
              <TableViewItems
                cart={cart}
                onIncrement={(id) => incrementQuantity(id)}
                onDecrement={(id) => decrementQuantity(id)}
                onRemove={(id) => removeFromCart(id)}
              />

              {/* Summery */}
              <div className="w-full lg:w-[302px] lg:mt-0 bg-lightBg px-8 py-5 ">
                <h1 className="text-sm sm:text-xl font-medium text-[#3D3D3D]">Summary</h1>
                <div className="flex flex-row justify-between items-center text-[13px] sm:text-sm font-medium text-darkblack my-5 sm:my-9">
                  <span>Cart total</span>
                  <span>{getTotalPrice()}</span>
                </div>

                <Link href="">
                  <button className="w-full h-[40px] sm:h-[43px] uppercase text-[13px] sm:text-[15px] font-normal text-white bg-primary my-6">
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Checkout;
