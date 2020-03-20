import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.js";
import NavBar from "./NavBar.js";
import { Footer } from "./Footer.js";
import Cookies from "js-cookie";
import "./LandingPage/popup.css";

function App() {
  const items = [
    {
      id: 0,
      images: ["/images/M0-1.jpeg", "/images/M0-2.jpeg"],
      name: "Maska0 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 1,
      images: ["/images/M1-1.jpeg", "/images/M1-2.jpeg"],
      name: "Maska1 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 2,
      images: ["/images/M2-1.jpeg", "/images/M2-2.jpeg"],
      name: "Maska2 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 3,
      images: ["/images/M3-1.jpeg", "/images/M3-2.jpeg"],
      name: "Maska3 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 4,
      images: ["/images/M4-1.jpeg", "/images/M4-2.jpeg"],
      name: "Maska4 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 5,
      images: ["/images/M5-1.jpeg", "/images/M5-2.jpeg"],
      name: "Maska5 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 6,
      images: ["/images/M6-1.jpeg", "/images/M6-2.jpeg"],
      name: "Maska6 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 7,
      images: ["/images/M7-1.jpeg", "/images/M7-2.jpeg"],
      name: "Maska7 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    },
    {
      id: 8,
      images: ["/images/M8-1.jpeg", "/images/M8-2.jpeg"],
      name: "Maska8 - 1 maska",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99
    }
  ];

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

  const handleAddingToCart = (itm, quantity) => {
    let item = itm;
    item.quantity = quantity;

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
