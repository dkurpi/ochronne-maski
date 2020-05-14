import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/Page.css";

import LandingPage from "./LandingPage/LandingPage.js";
import ProductPage from "./ProductPage/ProductPage.js";
import Cart from "./CartPage/Cart.js";
import Orders from "./Admin/Orders.js";
import { Contact, Delivery, Terms } from "./Footer/Footer.js";

import items from "../products/przedmioty.js";

function PageContent({ cart, setCart }) {
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
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage
              items={items}
              handleAddingToCart={handleAddingToCart}
            />
          </Route>
          <Route
            path="/product/:id"
            render={(props) => (
              <ProductPage
                items={items}
                handleAddingToCart={handleAddingToCart}
                {...props}
              />
            )}
          />
          <Route exact path="/koszyk">
            <Cart cart={cart} cookiesDeleteItem={cookiesDeleteItem} />
          </Route>
          <Route exact path="/zamowienia" component={Orders} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/regulamin" component={Terms} />
          <Route exact path="/dostawa" component={Delivery} />
        </Switch>
      </Router>
    </>
  );
}

export default PageContent;
