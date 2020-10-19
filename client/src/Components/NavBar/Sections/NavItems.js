import React from "react";
import items from "../../../Utils/products/items.js";

export default function NavItems() {
  return (
    <>
      {items.map(({ name, id }) => (
        <a href={`/product/${id}`} class="dropdown-item">
          <span> {name}</span>
        </a>
      ))}
    </>
  );
}