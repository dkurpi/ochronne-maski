import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import Cookies from "js-cookie";

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

  // clearCart = item => {
  //   console.log(item);
  //   Cookies.set("shoppingCartVellutoGiorno", [], {
  //     expires: 1
  //   });
  //   this.setState({
  //     cart: []
  //   });
  // };

  // cookiesDeleteItem = index => {
  //   const { cart } = this.state;
  //   cart.splice(index, 1);
  //   console.log(index, cart);
  //   Cookies.set("shoppingCartVellutoGiorno", cart, {
  //     expires: 1
  //   });
  //   this.setState({
  //     cart
  //   });
  //   window.location.reload();
  // };

  // handleDelete = index => {
  //   const { cart } = this.state;
  //   cart.splice(index, 1);
  //   console.log(index, cart);
  //   Cookies.set("shoppingCartVellutoGiorno", cart, {
  //     expires: 1
  //   });
  //   this.setState({
  //     cart
  //   });
  // };

  const handleAddingToCart = (item, quantity) => {
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
        items={items}
        cart={cart}
      />
      <Footer />
    </Suspense>
  );
}

export default App;
