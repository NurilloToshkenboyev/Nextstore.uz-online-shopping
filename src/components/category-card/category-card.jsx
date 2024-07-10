import React from "react";

export const CategoryCard = ({ Img, title }) => {
  return (
    <div className="group">
      <div className="bg-white w-[135px] h-[160px] pt-[10px] p-[33px] pl-[20px] pr-[20px] text-center rounded-[10px] transition-transform transform hover:scale-105 hover:shadow-lg">
        <img
          src={Img}
          alt="img"
          className="transition-transform transform group-hover:scale-110"
        />
        <h1 className="text-[12px] font-medium mt-2 transition-colors group-hover:text-blue-500">{title}</h1>
      </div>
    </div>
  );
};