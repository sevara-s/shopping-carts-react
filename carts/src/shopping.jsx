import React from "react";
import { useState, useEffect } from "react";
import ys from "../src/assets/svgs/ys.svg";

function ShoppingCart() {
  const [carItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json();
        setCartItems(data);
        console.log("done");
      } catch (error) {
        console.log(error);
      }
    }

    fetchCart();
  }, []);

  const wordLimit = (desc, limit = 10) => {
    const words = desc.split("");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return desc;
  };

  return (
    <>
      <div className="carts mt-[50px] ">
        <div className="container grid grid-cols-3 gap-[30px] max-[1015px]:grid-cols-2 max-[585px]:grid-cols-1">
          {carItems.map((cart1) => {
            return (
              <div key={cart1.id} className="cart1 w-full rounded-[10px] bg-[#fff]">
                <img
                  className="rounded-[10px] max-w-[336px] max-h-[244px]"
                  src={cart1.image}
                  alt={cart1.title}
                />

                <div className="all_info mt-[15px]">
                  <div className="title_rating">
                    <h2 className="font-[500] text-[20px] text-[#484848]">
                      {cart1.title}
                    </h2>
                    <div className="rating flex items-center gap-[10px]">
                      <img src={ys} alt="" />
                      <p>{cart1.rating.rate}</p>
                    </div>
                  </div>
                  <p className="font-[500] text-[12px] text-[#484848]">
                    {wordLimit(cart1.description, 15)}
                  </p>
                  <p className="font-[500] text-[24px] text-[#484848]">
                    ${cart1.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
