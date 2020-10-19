import React from "react";
import Menu from "./Menu.js";
import Carousel from "./Carousel.js";

import PriceTable from "../PriceTable/PriceTable.js";
import SuggestedProducts from "../SuggestedProducts/SuggestedProducts.js";
import items from "../../Utils/products/items";

function LandingPage({ handleAddingToCart }) {
  return (
    <div class="container-fluid container--modified">
      <div class="row mb-5">
        <Menu items={items} />
        <div class="col-lg-9 mt-lg-3 mt-6 container-top">
          <PriceTable />
          <Carousel items={items} handleAddingToCart={handleAddingToCart} />
          <SuggestedProducts items={items} handleAddingToCart={handleAddingToCart} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
