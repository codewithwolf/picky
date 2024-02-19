import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import Categories from "../cData";

const Home = () => {
  return (
    <>
      <div className="flex  py-5  justify-between">
        <div className="">
          {Categories.map((item) => (
            <div className=" ">
              <Sidebar item={item} />{" "}
            </div>
          ))}
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Home;
