import React from "react";
import { CategoryCard } from "../../components/category-card/category-card";
import { CategoriesData } from "../../data/categories1";
import { Bunner } from "../../components/bunner/bunner";
import { BunnerBottom } from "../../components/bunner-bottom/bunner-bottom";
import { ProductCard } from "../../components/product-card/product-card";
import { ProductsData } from "../../data/product";


export const Home = () => {
  return (
    <div>
      <section className="container pb-[50px] rounded-[50px]">
        <Bunner />
      </section>
      <section className="container">
        <h1 className="font-[500px] text-[28px] mb-[25px]">Kategoriyalar</h1>
        <div className="container flex justify-between mb-[20px]">
          {CategoriesData.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px]">
          Batafsil
        </p>
      </section>
      <section className="container pb-[60px] mx-auto">
        <h1 className="font-[500px] text-[28px] mb-[18px]">
          Eng ko'p sotilgan
        </h1>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {ProductsData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko'proq ko'rish
        </p>
      </section>
      <section className="container pb-[60px] mx-auto">
        <BunnerBottom />
      </section>
      <section className="container pb-[60px] mx-auto">
        <h1 className="font-[500px] text-[28px] mb-[18px]">Eng ommabop</h1>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {ProductsData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko'proq ko'rish
        </p>
      </section>
    </div>
  );
};