import React from "react";

function Menu({ items }) {
  const menuItems = items.map(item => (
    <a
      href={`/product/${item.id}`}
      class="list-group-item list-group-item-action"
    >
      {item.name}
    </a>
  ));
  return (
    <div class="col-lg-3 menuItem mt-3">
      <span className="Text text__delivery"> Nasze produkty:</span>
      <hr /><div class="list-group ">{menuItems}</div>
    </div>
  );
}

export default Menu;
