import React from "react";

const Card = ({ item }) => {
  const { img, price, title } = item;

  return (
    <>
      <div className="  ">
        <div className="">
          <img className="  w-36 md:w-28 " src={img} />
        </div>
        <div className=" font-semibold">
          <h2>{price}</h2>
        </div>
        <div>
          <h2 className="">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
