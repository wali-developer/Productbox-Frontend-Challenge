import React, { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage if available
    try {
      const storedItems = localStorage.getItem("cart");
      if (storedItems) {
        setCart(JSON.parse(storedItems));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const exist = cart?.find((i) => i?.id === item?.id);

    if (!exist) {
      setCart([...cart, { ...item, quantity: 1 }]);
      alert("Item added to your cart");
    } else {
      const temp = cart?.map((i) => {
        if (i?.id == exist?.id) {
          return {
            ...i,
            quantity: i?.quantity + 1,
          };
        }
      });
      setCart(temp);
      alert("Item Quantity incremented");
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const incrementQuantity = (id) => {
    const temp = cart?.map((i) => {
      if (i?.id == id) {
        return {
          ...i,
          quantity: i?.quantity + 1,
        };
      } else return i;
    });
    setCart(temp);
  };

  const decrementQuantity = (id) => {
    const temp = cart?.map((i) => {
      if (i?.id == id) {
        return {
          ...i,
          quantity: i?.quantity - 1,
        };
      } else return i;
    });
    setCart(temp);
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
