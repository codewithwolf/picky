import React from "react";
import Card from "./Card";
import data from "../CardData";

const Product = () => {
  return (
    <>
      <div className=" overflow-hidden ">
        <img
          className="  shadow-2xl sm:w-[900px]  rounded-md mr-9"
          src=" https://picksy.vercel.app/static/b056804a1e5cef1bc74271526829f620/c78e5/organic_034685f8-5bba-41a4-9f71-c9c1128a47c6.webp"
        />
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 shadow-2xl mt-6 items-center justify-center ">
        {data.map((item) => (
          <div className=" items-center justify-center text-center flex">
            <Card item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
