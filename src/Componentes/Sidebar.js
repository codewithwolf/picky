import React from "react";

const Sidebar = ({ item }) => {
  const { title, l } = item;
  return (
    <div className=" hidden sm:block">
      <div className=" font-medium  flex bg-white shadow-xl h-20 w-60 ">
        <div className=" ml-4">{title}</div>
        <div className=" ml-24 font-medium text-xl">{l}</div>
      </div>
    </div>
  );
};

export default Sidebar;
