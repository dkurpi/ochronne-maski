import React, { useEffect, useState } from "react";

import ProductInfo from "./ProductInfo.js";
import Products from "../Products/Products.js";
import Popup from "reactjs-popup";
import gsap from "gsap";

function ProductPage({ items, match, handleAddingToCart }) {
  const ID = parseInt(match.params.id);
  const itemID = items.find((itm) => itm.id === ID);
  const [item, setitem] = useState(itemID);
  const [quantity, setQuantity] = useState(0);
  const [packet, setPacket] = useState(3);
  const [isPopedOpen, setisPopedOpen] = useState(false);
  const bestID = [4, 18, 21, 23, 15, 0, 2, 23];
  const best = bestID.map((id) => items[id]);

  useEffect(() => {
    const ID = parseInt(match.params.id);
    const item = items.find(({ id }) => id === ID);
    setitem(item);
  }, [item]);

  const handleChangePrize = () => {
    const quant = document.getElementById("quant");
    const prize1 = document.querySelector(".product_price.price-new")
      .childNodes;
    const prize = [prize1[0], prize1[1]];
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.from([prize, quant], { x: 300, opacity: 0, stagger: 0.2 });
  };

  const popup = [
    <Popup
      quantity={quantity}
      handleAddingToCart={handleAddingToCart}
      item={item}
      open={isPopedOpen}
      modal
      setisPopedOpen={setisPopedOpen}
      onClose={() => setisPopedOpen(false)}
    >
      {(close) => (
        <div className="modale">
          <a
            className="close"
            onClick={() => {
              close();
              setisPopedOpen(false);
            }}
          >
            &times;
          </a>
          <h4 className="header"> Produkt dodano </h4>
          <hr />
          <img
            class="popup__img"
            src={item.images[0]}
            height="150"
            width="150"
            alt=""
          />
          <div className="popup__text">
            <h4>{item.name}</h4>
            Masek w paczce: {packet} <br />
            Ilość paczek: {quantity} <br />
            Łącznie masek: {packet * quantity} <br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Zamknij
            </button>
            <a href="/koszyk">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Przejdź do kasy
              </button>
            </a>
          </div>
        </div>
      )}
    </Popup>,
  ];

  return (
    <>
      <div class="container-fluid container--modified">
        <div class="row">
          <div className="product col-12 pl-1 pr-1">
            <ProductInfo
              item={item}
              packet={packet}
              handleChangePrize={handleChangePrize}
              setPacket={setPacket}
              quantity={quantity}
              handleAddingToCart={handleAddingToCart}
              setQuantity={setQuantity}
              setisPopedOpen={setisPopedOpen}
            />
          </div>
          <div class="row mb-5 col-12 ml-auto mr-auto">
            <Products items={best} handleAddingToCart={handleAddingToCart} />
          </div>
        </div>
      </div>
      {popup}
    </>
  );
}

export default ProductPage;
