import React from "react";

import { FiEdit } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const BookCard = ({books}) => {
    // {console.log(books)}
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mt-2 mx-5 ">
        <div className="flex gap-2 m-2 w-120 bg-white  shadow-md border p-3 rounded-md">
          <img className="w-[128px] h-[160px] object-cover" src="https://www.ruhamashop.com/wp-content/uploads/2024/05/ar-rahikul-makhtum.jpg" alt="" />

          <div className="flex flex-col justify-between w-full">
            <h1 className="font-semibold text-xl line-clamp-1">
            আর-রাহিকুল মাখতুম
            </h1>
            <h3 className="text-sm line-clamp-1">আল্লামা সফিউর রহমান মুবারকপুরী (রহ.)</h3>
            <div className="flex justify-between items-center gap-x-2 ">
              <div className="flex justify-between items-center gap-1 text-[#FFAE00]">
                <p>5</p>
                <FaStar />
              </div>
              <p className="text-xs line-clamp-1">সমকালীন প্রকাশনি</p>
              <FiEdit className="text-[#FFAE00] text-xl" />
              <FaRegHeart className="text-[#FFAE00] text-xl" />
              <MdDeleteForever className="text-red-500 text-2xl" />
            </div>
            <div className="flex justify-between ">
              <div className="flex items-center text-[#499F78] font-semibold text-xl">
                <h3>500</h3>
                <TbCurrencyTaka className="text-2xl" />
              </div>
              <button className="bg-[#499F78] py-1 px-5 rounded-md text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
