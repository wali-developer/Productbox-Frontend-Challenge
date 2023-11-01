import React, { useEffect, useState } from "react";
import ItemsList from "@/components/shop/ItemsList";
import Search from "@/components/shop/Search";
import Loader from "@/components/common/Loader";
import API from "@/utils/API";

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsBackup, setItemsBackup] = useState([]);

  useEffect(() => {
    // load items list
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await API.get("/items");
        if (response.status == 200) {
          setItems(response?.data);
          setItemsBackup(response?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Search handler
  const handleSearch = (query) => {
    if (query) {
      const filteredItems = items.filter((item) =>
        item?.name?.toLowerCase().includes(query?.toLowerCase())
      );
      setItems(filteredItems);
    } else {
      setItems(itemsBackup);
    }
  };

  return (
    <>
      <main className="resContainer">
        <div className="mt-7 mb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[#333333] font-medium">Shop</h1>
            <Search onSearch={(query) => handleSearch(query)} />
          </div>
          <ItemsList items={items} />
          {items?.length == 0 && !loading && (
            <h1 className="text-center font-semibold text-base md:text-2xl my-20 text-AdmiPrimary">
              No item found in the shop !
            </h1>
          )}
        </div>
      </main>
      {loading && <Loader />}
    </>
  );
};

export default Shop;
