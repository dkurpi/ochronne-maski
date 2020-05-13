import React, { Suspense, useState, useEffect } from "react";
import LandingPage from "./LandingPage.js";
import NavBar from "./NavBar.js";
import { Footer } from "./Footer.js";
import Cookies from "js-cookie";
import "../css/popup.css";
import items from "./przedmioty.js";

function App() {
  const bestID = [4, 18, 21, 23, 15, 0, 2, 23];
  const best = bestID.map((id) => items[id]);
  const [cart, setCart] = useState([]);

  const cookiesDeleteItem = (index) => {
    const cartCopy = cart;
    cartCopy.splice(index, 1);
    Cookies.set("maski-ochronne", cartCopy, {
      expires: 1,
    });
    setCart(cartCopy);
    window.location.reload();
  };

  const handleAddingToCart = (itm, quantity, packet) => {
    let item = itm;
    item.quantity = quantity;
    item.packet = packet;

    setCart([...cart, item]);
    console.log(cart);
    Cookies.set("maski-ochronne", [...cart, item], {
      expires: 1,
    });
  };

  useEffect(() => {
    if (Cookies.get("maski-ochronne")) {
      const cookiesLog = JSON.parse(Cookies.get("maski-ochronne"));
      setCart(cookiesLog);
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
