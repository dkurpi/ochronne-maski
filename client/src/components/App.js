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
      images: [
        "/images/maska1.jpg",
        "/images/maska2.jpg",
        "/images/maska3.jpg",
        "/images/maska2.jpg"
      ],
      name: "Maska1 - 50 masek",
      prize: 500,
      oldPrize: 759.99,
      prizeEach: 10.0,
      description: "Lorem ipsum "
    },
    {
      id: 1,
      images: ["/images/maska2.jpg"],
      name: "Maska2",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 2,
      images: ["/images/maska3.jpg"],
      name: "Maska3",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 3,
      images: ["/images/maska3.jpg"],
      name: "Mask4",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 4,
      images: ["/images/maska2.jpg"],
      name: "Mask5",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 5,
      images: ["/images/maska1.jpg"],
      name: "Mask6",
      prize: 39.99,
      oldPrize: 59.99,
      prizeEach: 39.99,
      description: "Lorem ipsum dolor sit, ameos!"
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
