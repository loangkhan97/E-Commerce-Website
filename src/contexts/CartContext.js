import React, { createContext, useState, useEffect}  from 'react'
import { IoMdTennisball } from 'react-icons/io';

// create context
export const CartContext = createContext()

const CartProvider = ({ Children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product ,id) => {
    const newItem = { ...product, amount: 1 }
    // check if the item is already in the cart
    const CartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart ite mis already in the cart
    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
    { Children}
  </CartContext.Provider>
  )
};

export default CartProvider;