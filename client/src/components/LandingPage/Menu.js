import React, { useEffect } from "react";
import gsap from "gsap";

function Menu({ items }) {
  const handleAnimations = () => {
    const titles = document.querySelector(".list-group ").childNodes;
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.from(titles, { x: -300, opacity: 0, stagger: 0.1, delay:.4 },);
  };

  useEffect(() => {
    handleAnimations();
  }, []);

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
      <hr />
      <div class="list-group ">{menuItems}</div>
    </div>
  );
}

export default Menu;
