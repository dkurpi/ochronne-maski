import React, { useEffect, useParams, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import Items from "./Items.js";
import Carousel from "./Carousel/Carousel.js";
import Popup from "reactjs-popup";

function Item({ items, match, handleAddingToCart, best }) {
  const [item, setitem] = useState(items[match.params.id]);
  const [quantity, setQuantity] = useState(0);
  const [packet, setPacket] = useState(3);

  const [isPopedOpen, setisPopedOpen] = useState(false);

  useEffect(() => {
    const ID = parseInt(match.params.id);
    const item1 = items.find(itm => itm.id === ID);
    setitem(item1);
  }, [item]);

  const mini_images = item.images.map((itm, idx) => {
    if (idx !== 0)
      return (
        <div className="mini-item">
          <LightgalleryItem group={`item`} src={itm}>
            <img
              onMouseEnter={e => {
                document.querySelector(".mainImage").src = itm;
              }}
              className="mini-item"
              src={itm}
            />
          </LightgalleryItem>
        </div>
      );
    else
      return (
        <div className="mini-item">
          <img
            onMouseEnter={e => {
              document.querySelector(".mainImage").src = itm;
            }}
            className="mini-item"
            src={itm}
          />
        </div>
      );
  });

  const popup = [
    <Popup
      quantity={quantity}
      handleAddingToCart={handleAddingToCart}
      item={item}
      open={isPopedOpen}
      modal
      setisPopedOpen={setisPopedOpen}
      onClose={() => setisPopedOpen(false)}
    >
      {close => (
        <div className="modale">
          <a
            className="close"
            onClick={() => {
              close();
              setisPopedOpen(false);
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
            Masek w paczce: {packet} <br />
            Ilość paczek: {quantity} <br />
            Łącznie masek: {packet * quantity} <br />
            <h4>
              {[packet * quantity * item.prize][0].toFixed(2)} zł <br />
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

  return (
    <>
      <div className="product col-12 pl-1 pr-1">
        <div class="descriptions media  flex-column flex-lg-row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100  text-center">
              <LightgalleryProvider>
                <div className="mini-items">{mini_images}</div>

                <LightgalleryItem group={`item`} src={item.images[0]}>
                  <img
                    class="card-img-top mainImage"
                    src={item.images[0]}
                    alt=""
                  />
                </LightgalleryItem>
              </LightgalleryProvider>
            </div>
          </div>

          <div class="media-body order-2 order-lg-2 ml-lg-5 flex-fill">
            <h2 class="mt-2 mb-1">
              {item.name} - paczka {packet} masek
            </h2>
            <hr />
            <div class="product-rating my-2">
              Dostępność: towar na wyczerpaniu
            </div>
            <div class="product-rating mb-2 vat">Wysyłka w: 24 godzin</div>
            <span class="product_price price-new">
              <h4>
                <s style={{ color: "red", fontSize: "20px" }}>
                  {[packet * item.oldPrize][0].toFixed(2)}zł
                </s>
                {"      "}
                {[packet * item.prize][0].toFixed(2)}zł
              </h4>
              <div class="product-rating mb-2 vat">
                {item.prizeEach} zł/maska
              </div>
              <label for="quantity">Masek w paczce :</label>
              <select
                value={packet}
                onChange={e => {
                  setPacket(e.target.value);
                  const selID = e.target.selectedIndex;
                  if (item.prizeSelected) {
                    item.prizeEach = item.prizeSelected[selID];
                    item.prize = item.prizeEach ;
                    console.log(item.prizeEach, item.prize);
                  }
                }}
                id="quantity"
                name="quantity"
                form="carform"
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
              <div className="adding my-2">
                <input
                  onChange={e => {
                    setQuantity(parseInt(e.target.value));
                    console.log(quantity);
                  }}
                  class="quantity"
                  min="1"
                  max="100"
                  name="quantity"
                  type="number"
                  placeholder="Ilość paczek"
                  style={{ alignItems: "center" }}
                />
                <button
                  onClick={() => {
                    console.log("działa");
                    if (
                      quantity >= 1 &&
                      quantity <= 100 &&
                      typeof quantity === "number"
                    ) {
                      let selectedItem = item;
                      selectedItem.name = `${item.name} - paczka ${packet} masek`;
                      handleAddingToCart(selectedItem, quantity, packet);
                      setisPopedOpen(true);
                    } else alert("Popraw ilość");
                  }}
                  type="button"
                  class="btn btn-danger ml-2"
                >
                  Dodaj do koszyka{" "}
                  <p style={{ fontSize: "12px", marginBottom: "0" }}>
                    {quantity ? (
                      <>
                        (łącznie {quantity * packet} masek)
                        <br />
                        (za {[packet * quantity * item.prize][0].toFixed(2)} zł)
                      </>
                    ) : null}
                  </p>
                </button>
                <div class="ml-2"></div>
              </div>
            </span>

            <h5 class="mt-3">Opis:</h5>
            <hr class="mb-2 mt-1 seperator" />
            <div class="d-flex align-items-center justify-content-between mt-1">
              <div class="resetcss" itemprop="description">
                <br />
                <h4>Maska filtrująca:</h4>
                <ul>
                  <li>
                    Tkanina najwyższej jakości OEKO-TEX Bawełny 100% z
                    możliwością dezynfekcji i wielokrotnego użytku
                  </li>
                  <li>Można je dezynfekować w temperaturze nawet 90 stopni</li>

                  <li>
                    ergonomiczny kształt z metalowym dociskiem na nos idealnie
                    dostosuje się do twarzy
                  </li>
                  <li>zakładana na elastyczną gumkę</li>
                  <li>
                    metalowa klamra na wysokości nosa na zewnętrznej części
                    maski
                  </li>

                  <li>idealna ochrona przed pyłami i drobnymi cząstkami</li>
                </ul>
                <h5>{item.description} </h5>
                <br />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="pb-6 mt-1">Bestsellery:</h4>
      <div class="row mb-5 col-12 ml-auto mr-auto">
        <Items items={best} handleAddingToCart={handleAddingToCart} />
      </div>
      {popup}
    </>
  );
}

export default Item;
