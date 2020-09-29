import React from "react";
import Gallery from "./Gallery";

export default function ProductInfo({
  item,
  packet,
  handleChangePrize,
  setPacket,
  quantity,
  handleAddingToCart,
  setQuantity,
  setisPopedOpen,
}) {
  return (
    <div class="descriptions media  flex-column flex-lg-row">
      <div class="col-lg-4 col-md-6 mb-4">
        <Gallery item={item} />
      </div>

      <div class="media-body order-2 order-lg-2 ml-lg-5 flex-fill">
        <h2 class="mt-2 mb-1">
          {item.name} <br /> paczka <span id="quant">{packet}</span> masek
        </h2>
        <hr />
        <div class="product-rating my-2">
          Dostępność: <i>Towar dostępny</i>
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
          <div class="product-rating mb-2 vat">{item.prizeEach} zł/maska</div>
          <label for="quantity">Masek w paczce :</label>
          <select
            value={packet}
            onChange={(e) => {
              handleChangePrize();
              setPacket(e.target.value);
              const selID = e.target.selectedIndex;
              if (item.prizeSelected) {
                item.prizeEach = item.prizeSelected[selID];
                item.prize = item.prizeEach;
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
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
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
                if (
                  quantity >= 1 &&
                  quantity <= 100 &&
                  typeof quantity === "number"
                ) {
                  const selectedItem = { ...item };
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
                Tkanina najwyższej jakości OEKO-TEX Bawełny 100% z możliwością
                dezynfekcji i wielokrotnego użytku
              </li>
              <li>Można je dezynfekować w temperaturze nawet 90 stopni</li>

              <li>
                ergonomiczny kształt z metalowym dociskiem na nos idealnie
                dostosuje się do twarzy
              </li>
              <li>
                metalowa klamra na wysokości nosa na zewnętrznej części maski
              </li>

              <li>idealna ochrona przed pyłami i drobnymi cząstkami</li>
            </ul>
            <h5>
              Zakładana na {item.group !== 1 ? " troczki" : "elastyczną gumkę"}
            </h5>
            <h5>{item.description} </h5>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
