import React from "react";
import StoreCard from "../components/StoreCard";
import data from "../data";

const Store = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-7">
      {data.map((product, index) => (
        <StoreCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Store;
