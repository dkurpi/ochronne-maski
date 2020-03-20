import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js";
import Items from "./Items.js";
import Menu from "./Menu.js";
import "./Page.css";
import Item from "./Item.js";
import Cart from "./Cart.js";
import Orders from "./Orders.js";
import { Contact, Delivery, Terms } from "../Footer.js";

function LandingPage(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/koszyk">
            <Cart
              cart={props.cart}
              cookiesDeleteItem={props.cookiesDeleteItem}
            />
          </Route>
          <Route exact path="/zamowienia">
            <Orders />
          </Route>
          <Route exact path="/">
            <div class="container-fluid container--modified">
              <div class="row mb-5">
                <Menu items={props.items} />
                <div class="col-lg-9 mt-lg-3 mt-6 container-top">
                  <Carousel
                    items={props.items}
                    handleAddingToCart={props.handleAddingToCart}
                  />
                  <span className="Text text__delivery"> Promocje:</span>
                  <hr />
                  <Items
                    items={props.items}
                    handleAddingToCart={props.handleAddingToCart}
                  />
                </div>
              </div>
            </div>
          </Route>
          <Route
            path="/product/:id"
            render={propse => [
              <>
                <div class="container-fluid container--modified">
                  <div class="row">
                    <Item
                      items={props.items}
                      best={props.best}
                      handleAddingToCart={props.handleAddingToCart}
                      {...propse}
                    />
                  </div>
                </div>
              </>
            ]}
          ></Route>
          <Route path="/kontakt" component={Contact} />
          <Route path="/regulamin" component={Terms} />
          <Route path="/dostawa" component={Delivery} />
        </Switch>
      </Router>
    </>
  );
}

export default LandingPage;
