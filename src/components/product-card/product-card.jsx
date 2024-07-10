import React from "react";

export const ProductCard = ({ img, price, title, text, button, icon }) => {
  return (
    <div className="w-[240px] bg-white pt-[10px] pb-[23px] px-[10px] rounded-[12px] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        className="w-full h-[180px] object-cover mb-[10px]"
        src={img}
        alt="img"
      />
      <h1 className="text-start font-medium text-[17px] text-[#0C5ADE] mb-[6px]">
        {price}
      </h1>
      <h1 className="font-semibold text-[12px] mb-[10px]">{title}</h1>
      <h1 className="text-[14px] mb-[20px] text-[#6C757D]">{text}</h1>
      <div className="flex justify-center">
        <button className="text-white pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#0C5ADE] rounded-[10px] text-center">
          {button}
        </button>
        <p className="ml-[5px]">{icon}</p>
      </div>
    </div>
  );
};