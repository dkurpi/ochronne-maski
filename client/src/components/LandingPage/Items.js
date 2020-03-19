import React, { useState } from "react";

export default function Items(props) {
  const [items, setitems] = useState(props.items);

  const products = items.map(item => {
    return (
      <div class="col-lg-3 col-md-4  col-sm-6 mb-2 flexcolumn">
        <div class="card h-100  text-center">
          <a href={`/product/${item.id}`}>
            <img class="card-img-top" src={item.images[0]} alt="" />
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href={`product/${item.id}`}>{item.name}</a>
            </h4>
            <h5>
              <s style={{ color: "red", fontSize: "15px" }}>
                {item.oldPrize}zł
              </s>{" "}
              {item.prize}zł
            </h5>
            <h6 class="vat">zawiera 23% VAT, bez kosztów dostawy</h6>
          </div>
          <div class="card-footer">
            <button
              onClick={() => {
                props.handleAddingToCart(item, 1);
              }}
              type="button"
              class="btn btn-danger"
            >
              Kup teraz
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div class="row flexcolumn-wrapper">{products}</div>;
}
