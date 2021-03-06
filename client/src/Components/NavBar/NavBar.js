import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavItems from "./Sections/NavItems";
import CartList from "./Sections/CartList";

function NavBar({ cart }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center fixed-top">
      <div style={{ maxWidth: "1620px" }} class="container-fluid ">
        <a class="navbar-brand" href="/">
          Ochronne maski
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
            <li class="nav-item contacto "></li>
            <li class="nav-item contacto ">
              <a class="nav-link contacto" href="/kontakt">
                Kontakt
              </a>
            </li>

            <li class="nav-item dropdown cartLG">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <i class="fas fa-shopping-cart"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                {cart.length === 0 ? (
                  <a class="dropdown-item ">Brak przedmiotów w koszyku</a>
                ) : (
                  [
                    <CartList cart={cart} />,
                    <a href={`/koszyk`} class=" dropdown-item pay ">
                      ZAPŁAĆ
                    </a>,
                  ]
                )}
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle btn-danger btn-md"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Produkty
              </a>
              <div class="dropdown-menu scrollableMenu dropdown-menu-right">
                <NavItems />
              </div>
              <a
                href="/koszyk"
                class="dropdown-item btn-danger red"
                style={{ backgroundColor: "red !important", color: "white" }}
              >
                <span> Koszyk</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
