import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.js";
import NavBar from "./NavBar.js";
import { Footer } from "./Footer.js";
import Cookies from "js-cookie";
import "./LandingPage/popup.css";
import items from "./przedmioty.js";

function App() {
  const bestID = [4, 3, 2, 1];
  const best = bestID.map(id => items[id]);
  const [cart, setcart] = useState([]);

  const cookiesDeleteItem = index => {
    const cartCopy = cart;
    cartCopy.splice(index, 1);
    Cookies.set("maski-ochronne", cartCopy, {
      expires: 1
    });
    setcart(cartCopy);
    window.location.reload();
  };

  const handleDelete = index => {};

  const handleAddingToCart = (itm, quantity, packet) => {
    let item = itm;
    item.quantity = quantity;
    item.packet = packet

    setcart([...cart, item]);
    console.log(cart);
    Cookies.set("maski-ochronne", [...cart, item], {
      expires: 1
    });
  };

  useEffect(() => {
    if (Cookies.get("maski-ochronne")) {
      const cookiesLog = JSON.parse(Cookies.get("maski-ochronne"));
      console.log(cookiesLog);
      setcart(cookiesLog);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar cart={cart} items={items} />
      <LandingPage
        handleAddingToCart={handleAddingToCart}
        cookiesDeleteItem={cookiesDeleteItem}
        items={items}
        best={best}
        cart={cart}
      />
      <Footer />
    </Suspense>
  );
}

export default App;
