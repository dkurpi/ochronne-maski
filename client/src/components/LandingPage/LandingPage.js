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
      <Route exact cart={props.cart} path="/koszyk" component={Cart} />
      {console.log(props.cart)}
      <div class="container-fluid container--modified">
        <div class="row">
          <Router>
            <Switch>
              <Route exact path="/">
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
              </Route>
              <Route
                path="/product/:id"
                render={propse => [
                  <Menu items={props.items} />,
                  <Item
                    items={props.items}
                    handleAddingToCart={props.handleAddingToCart}
                    items={props.items}
                    {...propse}
                  />
                ]}
              ></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
