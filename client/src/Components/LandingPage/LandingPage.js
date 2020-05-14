import React from "react";
import Menu from "./Menu.js";
import Carousel from "./Carousel.js";

import PrizeTable from "../PrizeTable/PrizeTable.js";
import Items from "../Products/Products.js";


function LandingPage({ items, handleAddingToCart }) {
  return (
    <div class="container-fluid container--modified">
      <div class="row mb-5">
        <Menu items={items} />
        <div class="col-lg-9 mt-lg-3 mt-6 container-top">
          <PrizeTable />

          <Carousel items={items} handleAddingToCart={handleAddingToCart} />
          <span className="Text text__delivery"> Produkty:</span>
          <hr />
          <Items items={items} handleAddingToCart={handleAddingToCart} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
