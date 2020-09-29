import React from "react";

export default function CartList({ cart }) {
  let suma = 0;

  return (
    <>
      {cart.map(({ name, id, packet, quantity, prize }) => {
        const prizeAll = [packet * quantity * prize][0].toFixed(2);
        console.log(typeof suma);
        suma += prizeAll * 1;
        return (
          <a href={`/product/${id}`} class="dropdown-item menu__cart">
            <span class="pr-5 flex-grow">{name}</span>
            <span class="ml-auto">
              {quantity}
              {quantity === 1 ? " paczka" : " paczek"} {" |  "}
              {packet * quantity}szt
            </span>
          </a>
        );
      })}
    </>
  );
}
