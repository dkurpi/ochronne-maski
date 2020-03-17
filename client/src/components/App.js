import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

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
      name: "Maska1 - 100szt",
      prize: 39.99,
      oldPrize: 59.99,
      description: "Lorem ipsum "
    },
    {
      id: 1,
      images: ["/images/maska2.jpg"],
      name: "Maska2 - 100szt",
      prize: 39.99,
      oldPrize: 59.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 2,
      images: ["/images/maska3.jpg"],
      name: "Maska3 - 100szt",
      prize: 39.99,
      oldPrize: 59.99,
      description: "Lorem ipsum dolor sit, ameos!"
    },
    {
      id: 3,
      images: ["/images/maska3.jpg"],
      name: "Mask312132213a4 - 100szt",
      prize: 39.99,
      oldPrize: 59.99,
      description: "Lorem ipsum dolor sit, ameos!"
    }
  ];

  const [cart, setcart] = useState([]);

  const handleAddingToCart = item => {
    setcart([...cart, item]);
    console.log(cart);
  };

  useEffect(() => {}, [cart]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar cart={cart} items={items} />
      <LandingPage handleAddingToCart={handleAddingToCart} items={items} />
      <Footer />
    </Suspense>
  );
}

export default App;
