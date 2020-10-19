import React, { useEffect, useState } from "react";

import ItemPopup from "../ItemPopup/ItemPopup.js";
import ProductInfo from "./ProductInfo.js";
import SuggestedProducts from "../SuggestedProducts/SuggestedProducts.js";
import gsap from "gsap";
import { bestsellersID } from "../../Utils/products/bestsellersID";
import items from "../../Utils/products/items.js";

function ProductPage({ match, handleAddingToCart }) {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [packet, setPacket] = useState(3);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const bestsellers = bestsellersID.map((id) => items[id]);

  useEffect(() => {
    const ID = parseInt(match.params.id);
    const item = items.find(({ id }) => id === ID);
    setItem(item);
  }, [item]);

  const handleChangePrize = () => {
    const quant = document.getElementById("quant");
    const prize1 = document.querySelector(".product_price.price-new")
      .childNodes;
    const prize = [prize1[0], prize1[1]];
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.from([prize, quant], { x: 300, opacity: 0, stagger: 0.2 });
  };

  return (
    <>
      <div class="container-fluid container--modified">
        <div class="row">
          <div className="product col-12 pl-1 pr-1">
            {Object.keys(item).length && (
              <ProductInfo
                item={item}
                packet={packet}
                handleChangePrize={handleChangePrize}
                setPacket={setPacket}
                quantity={quantity}
                handleAddingToCart={handleAddingToCart}
                setQuantity={setQuantity}
                setisPopedOpen={setPopupOpen}
              />
            )}
          </div>
          <div class="row mb-5 col-12 ml-auto mr-auto">
            <SuggestedProducts items={bestsellers} handleAddingToCart={handleAddingToCart} />
          </div>
        </div>
      </div>
      <ItemPopup
        item={{ ...item, quantity, packet }}
        setPopupOpen={setPopupOpen}
        popupOpen={isPopupOpen}
      />
    </>
  );
}

export default ProductPage;
