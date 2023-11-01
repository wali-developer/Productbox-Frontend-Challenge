import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const ItemsList = ({ items }) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7 mt-5">
      {items?.map((item, index) => {
        return <ItemCard key={item?.id} item={item} onAddToCart={() => {}} />;
      })}
    </section>
  );
};

export default ItemsList;
