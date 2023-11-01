import { GlobalContext } from "@/context/globalContext";
import { url } from "@/utils/API";
import React, { useContext } from "react";

const ItemCard = ({ item, onAddToCart }) => {
  const { addToCart } = useContext(GlobalContext);
  return (
    <div className="md:w-full mb-4 first:ml-0 lg:mx-auto md:mb-0 group">
      <div className="w-full h-[200px] md:h-[287px] 2xl:h-[315px] relative overflow-hidden">
        {item?.img ? (
          <img
            src={`${url}/${item?.img}`}
            alt={item?.name}
            className="w-full object-cover object-center h-[193px] sm:h-full"
          />
        ) : (
          <div className="w-full object-cover object-center h-[193px] sm:h-full bg-primary/20 text-5xl text-primary font-bold flex justify-center items-center">
            {item?.name?.charAt(0)?.toUpperCase()}
          </div>
        )}
        {/* Contetn on card hover */}
        <div className="w-full transition-all duration-500 absolute top-0 left-0 sm:translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="w-full h-[200px] md:h-[287px] 2xl:h-[315px] relative flex items-center justify-end">
            <button
              className="bg-black w-full h-[37px] flex flex-row gap-x-2 sm:gap-x-3 items-center justify-center absolute bottom-0"
              onClick={() => addToCart(item)}
            >
              <span className="text-white text-xs sm:text-[13px]">Add To Cart</span>
            </button>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="pt-4 cursor-pointer">
        <div className="text-[#3F3F3F] text-[13px] md:text-base font-medium">
          <span>{item?.name}</span>
        </div>
        <div className="pt-1 flex flex-row items-center">
          <span className="text-[#3F3F3F] text-sm font-semibold mr-4">PKR {item?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
