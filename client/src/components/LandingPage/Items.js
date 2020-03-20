import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import gsap from "gsap";

export default function Items(props) {
  const [items, setitems] = useState(props.items);
  const [item, setitem] = useState({});
  const [PopedOpen, setPopedOpen] = useState(false);

  const handleAnimations = () => {
   
    const items = document.querySelector(
      ".row.flexcolumn-wrapper"
    //  "slider__section"
    )

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.from(items, 2, { y: 300, opacity: 0, stagger: 0.2 }, "=+1");
  };

  useEffect(() => {
    handleAnimations();
  }, []);
  const popup = [
    <Popup
      open={PopedOpen}
      modal
      onClose={() => {
        setPopedOpen(false);
      }}
    >
      {close => (
        <div className="modale">
          <a
            className="close"
            onClick={() => {
              close();
            }}
          >
            &times;
          </a>
          <h4 className="header"> Produkt dodano </h4>
          <hr />
          <img
            class="popup__img"
            src={item.images[0]}
            height="200"
            width="200"
            alt=""
          />
          <div className="popup__text">
            <br />
            <h4>{item.name}</h4>
            Masek w paczce: {item.packet} <br />
            Ilość paczek: {item.quantity} <br />
            Łącznie masek: {item.packet * item.quantity} <br />
            <h4>
              {[item.packet * item.quantity * item.prize][0].toFixed(2)} zł{" "}
              <br />
            </h4>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Zamknij
            </button>
            <a href="/koszyk">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Przejdź do kasy
              </button>
            </a>
          </div>
        </div>
      )}
    </Popup>
  ];

  const products = items.map(item => {
    return (
      <>
        <div class="col-lg-3 col-md-4  col-sm-6 mb-2 flexcolumn">
          <div class="card h-100  text-center">
            <a href={`/product/${item.id}`}>
              <img
                class="card-img-top"
                onPointerEnter={e => {
                  item.images[1]
                    ? (e.target.src = item.images[1])
                    : (e.target.src = item.images[0]);
                }}
                onPointerLeave={e => {
                  e.target.src = item.images[0];
                }}
                src={item.images[0]}
                alt=""
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href={`product/${item.id}`}>{item.name}</a>
              </h4>
              <h4>
                <s style={{ color: "red", fontSize: "15px" }}>
                  {item.oldPrize}zł
                </s>{" "}
                {item.prize}zł
              </h4>
              <div class="product-rating mb-2 vat">
                {item.prizeEach} zł/maska
              </div>
              <h6 class="vat">zawiera 23% VAT, bez kosztów dostawy</h6>
            </div>
            <div class="card-footer">
              <button
                onClick={() => {
                  props.handleAddingToCart(item, 1, 3);
                  setitem(item);
                  setPopedOpen(true);
                }}
                type="button"
                class="btn btn-danger"
              >
                Kup teraz
              </button>
            </div>
          </div>
        </div>
        {popup}
      </>
    );
  });

  return <div class="row flexcolumn-wrapper">{products}</div>;
}
