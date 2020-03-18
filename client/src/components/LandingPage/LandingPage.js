import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./Carousel/Carousel.js";
import Items from "./Items.js";
import Menu from "./Menu.js";
import "./Page.css";
import Item from "./Item.js";
import Cart from "./Cart.js";
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
          <Route exact path="/">
            <div class="container-fluid container--modified">
              <div class="row">
                <Menu items={props.items} />

                <div class="col-lg-9">
                  <Carousel
                    items={props.items}
                    handleAddingToCart={props.handleAddingToCart}
                  />
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
                      handleAddingToCart={props.handleAddingToCart}
                      items={props.items}
                      {...propse}
                    />
                  </div>
                </div>
              </>
            ]}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default LandingPage;
