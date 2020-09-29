import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

export default function Gallery({ item }) {
  const mini_images = item.images.map((itm, idx) => {
    if (idx !== 0)
      return (
        <div className="mini-item">
          <LightgalleryItem group={`item`} src={itm}>
            <img
              onMouseEnter={(e) => {
                document.querySelector(".mainImage").src = itm;
              }}
              className="mini-item"
              src={itm}
            />
          </LightgalleryItem>
        </div>
      );
    else
      return (
        <div className="mini-item">
          <img
            onMouseEnter={(e) => {
              document.querySelector(".mainImage").src = itm;
            }}
            className="mini-item"
            src={itm}
          />
        </div>
      );
  });

  return (
    <div class="card h-100  text-center">
      <LightgalleryProvider>
        <div className="mini-items">{mini_images}</div>
        <LightgalleryItem group={`item`} src={item.images[0]}>
          <img class="card-img-top mainImage" src={item.images[0]} alt="" />
        </LightgalleryItem>
      </LightgalleryProvider>
    </div>
  );
}
