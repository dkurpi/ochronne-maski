import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
function NavBar({ items, cart }) {
  const navItems = items.map(item => (
    <a href={`/product/${item.id}`} class="dropdown-item">
      {item.name}
    </a>
  ));
  const cartList = cart.map(item => (
    <a href={`/product/${item.id}`} class="dropdown-item">
      {item.name} {" |  "} {item.quantity}szt {" |  "}
      {item.quantity * item.prize}zł
    </a>
  ));

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center fixed-top">
      <div style={{ maxWidth: "1620px" }} class="container-fluid ">
        <a class="navbar-brand" href="/">
          Maseczki ochronne
        </a>
        <div className="cartMini ml-auto mr-3">
          <a href="/koszyk">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarResponsive">
          <ul class="navbar-nav  ml-auto mr-8 justify-content-center">
            <li
              onMouseEnter={e => {
                console.log("eee");
              }}
              class="nav-item dropdown cartLG"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <i class="fas fa-shopping-cart"></i>
              </a>
              <div class="dropdown-menu">
                {cart.length === 0 ? (
                  <a class="dropdown-item ">Brak przedmiotów w koszyku</a>
                ) : (
                  [
                    cartList,
                    <a href={`/koszyk`} class=" dropdown-item">
                      ZAPŁAĆ
                    </a>
                  ]
                )}
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Start
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Produkty
              </a>
              <div class="dropdown-menu">{navItems}</div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
