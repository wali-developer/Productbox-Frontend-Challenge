import { url } from "@/utils/API";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const TableViewItems = ({ cart, onDecrement, onIncrement, onRemove }) => {
  return (
    <div className="md:w-[724px]">
      <div className="w-full h-[61px] flex flex-row items-center mb-4">
        <span className="font-medium text-sm md:text-base text-[#3D3D3D] w-[170px] sm:w-[350px]">
          Item
        </span>
        <span className="font-medium hidden text-sm md:text-base md:table-cell text-[#3D3D3D] w-[14%]">
          Price
        </span>
        <span className="font-medium text-[#3D3D3D] text-sm md:text-base w-[90px] md:w-[20%]">
          Quantity
        </span>
        <span className="font-medium text-[#3D3D3D] text-sm md:text-base md:w-[14%]">
          SubTotal
        </span>
      </div>
      {cart?.map((item, index) => (
        <div key={index + ""}>
          <div
            className="w-full h-[61px] flex flex-row items-center relative"
            style={{ paddingBottom: "10px 0" }}
          >
            <span className="flex flex-row items-center cursor-pointer w-[170px] sm:w-[350px]">
              {item?.img ? (
                <img
                  src={`${url}/${item?.img}`}
                  alt="Item"
                  className="pr-4 md:pr-10 w-[45px] h-[45px] sm:w-[80px] sm:h-[60px] object-cover"
                />
              ) : (
                <div className="pr-4 md:pr-10 w-[45px] h-[45px] sm:w-[80px] sm:h-[60px] bg-primary/20 text-base font-semibold">
                  {item?.name?.charAt(0)}
                </div>
              )}
              <span className="text-[#3D3D3D] text-[13px] sm:text-sm font-medium">
                {item?.name}
              </span>
            </span>
            <span className="text-[#3D3D3D] text-sm font-medium w-[14%] hidden md:table-cell">
              PKR {item?.price}
            </span>
            <div className="text-[#3D3D3D] text-sm font-medium md:w-[20%]">
              <span className="w-[90px] pl-5 md:pl-0 md:w-[114px] md:h-[43px] md:border border-[#EEEEEE] flex">
                <span
                  className="bg-[#EEEEEE] md:w-[26px] hidden md:flex justify-center items-center cursor-pointer"
                  onClick={() => onDecrement(item?.id)}
                >
                  -
                </span>
                <span className="md:w-[62px] bg-white text-[13px] md:text-sm flex justify-center items-center">
                  {item?.quantity}
                </span>
                <span
                  className="bg-[#EEEEEE] md:w-[26px] hidden md:flex justify-center items-center cursor-pointer"
                  onClick={() => onIncrement(item?.id)}
                >
                  +
                </span>
              </span>
            </div>
            <span className="text-[#3D3D3D] text-[13px] md:text-sm font-medium  md:w-[14%]">
              {item?.price * item?.quantity}
            </span>
            <button
              className="absolute -right-2 sm:right-0 cursor-pointer"
              onClick={() => onRemove(item?.id)}
            >
              <RxCross2 className="text-black text-xl" />
            </button>
          </div>
          <hr className="w-full h-[1px] text-[#e2e2e2] my-4" />
        </div>
      ))}
    </div>
  );
};

export default TableViewItems;
