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
      <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 shadow-2xl mt-6 gap-5">
        {data.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
