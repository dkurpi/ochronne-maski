import React, { useEffect, useParams, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

function Item({ items, match }) {
  const [item, setitem] = useState(items[0]);

  useEffect(() => {
    const ID = parseInt(match.params.id);
    const item = items.find(itm => itm.id === ID);
    setitem(item);
  }, []);

  const mini_images = item.images.map(itm => {
    return (
      <div className="mini-item">
        <LightgalleryItem group="items" src={itm}>
          <img
            onMouseEnter={e => {
              document.querySelector(".mainImage").src = itm;
            }}
            className="mini-item"
            src={itm}
          />
        </LightgalleryItem>
      </div>
    );
  });

  return (
    <>
      <div className="product col-lg-9">
        <div class="media align-items-lg-center flex-column flex-lg-row">
          <LightgalleryProvider>
            <div className="mini-items">{mini_images}</div>

            <LightgalleryItem group="items" src={items[0].images[0]}>
              <img
                src={item.images[0]}
                alt="Generic placeholder image"
                width="300"
                height="auto"
                class="order-1 order-lg-1 mainImage"
              />
            </LightgalleryItem>
          </LightgalleryProvider>

          <div class="media-body order-2 order-lg-2 ml-lg-5">
            <h5 class="mt-0 mb-1">{item.name}</h5>
            <div class="product-rating mb-2">
            <i class="fa fa-star"></i>Dostepny w magazynie
            </div>{" "}
            <span class="product_price price-new">
              <h5>
                <s style={{ color: "red", fontSize: "15px" }}>
                  {item.oldPrize}zł
                </s>{" "}
                {item.prize}zł
              </h5>
            </span>
            <hr class="mb-2 mt-1 seperator" />
            <div class="d-flex align-items-center justify-content-between mt-1">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
