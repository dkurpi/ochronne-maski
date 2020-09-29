import React, { useState } from "react";
import ItemPopup from "../ItemPopup/ItemPopup.js";

export default function SuggestedProducts({ items, handleAddingToCart }) {
  const [popupItem, setPopupItem] = useState({});
  const [popupOpen, setPopupOpen] = useState(false);

  const products = items.map((item) => {
    return (
      <>
        <div class="col-lg-3 col-md-4  col-sm-6 mb-2 flexcolumn">
          <div class="card h-100  text-center">
            <a href={`/product/${item.id}`}>
              <img
                class="card-img-top"
                onPointerEnter={(e) => {
                  item.images[1]
                    ? (e.target.src = item.images[1])
                    : (e.target.src = item.images[0]);
                }}
                onPointerLeave={(e) => {
                  e.target.src = item.images[0];
                }}
                src={item.images[0]}
                alt=""
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href={`product/${item.id}`}>{item.name}</a>
              </h4>
              <h4>
                <s style={{ color: "red", fontSize: "15px" }}>
                  {item.oldPrize}zł
                </s>{" "}
                {item.prize}zł
              </h4>
              <div class="product-rating mb-2 vat">
                {item.prizeEach} zł/maska
              </div>
              <h6 class="vat">zawiera 23% VAT, bez kosztów dostawy</h6>
            </div>
            <div class="card-footer">
              <button
                onClick={() => {
                  handleAddingToCart(item, 1, 3);
                  setPopupItem(item);
                  setPopupOpen(true);
                }}
                type="button"
                class="btn btn-danger"
              >
                Kup teraz
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <span className="Text text__delivery"> Produkty:</span>
      <hr />
      <div class="row flexcolumn-wrapper">{products}</div>
      <ItemPopup
        item={popupItem}
        setPopupOpen={setPopupOpen}
        popupOpen={popupOpen}
      />
    </>
  );
}
