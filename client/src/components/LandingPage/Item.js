import React, { useEffect, useParams, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

function Item({ items, match, handleAddingToCart }) {
  const [item, setitem] = useState(items[match.params.id]);
  const [quantity, setQuantity] = useState(0);

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

  return (
    <>
      <div className="product col-lg-9 ">
        <div class="descriptions media  flex-column flex-lg-row">


          {/* <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100  text-center">
              <LightgalleryProvider>
                <div className="mini-items  justify-content-center">
                  {mini_images}
                </div>

                <LightgalleryItem group={`item`} src={item.images[0]}>
                  <img
                    class="card-img-top mainImage"
                    src={item.images[0]}
                    alt=""
                  />
                </LightgalleryItem>
              </LightgalleryProvider>
            </div>
          </div> */}



          <div class="media-body order-2 order-lg-2 ml-lg-5 flex-fill">
            <h5 class="mt-2 mb-1">{item.name}</h5>
            <div class="product-rating my-2">
              Dostępność: towar na wyczerpaniu
            </div>
            <div class="product-rating mb-2">Wysyłka w: 48 godzin</div>
            <span class="product_price price-new">
              <h5>
                <s style={{ color: "red", fontSize: "15px" }}>
                  {item.oldPrize}zł
                </s>
                {"      "}
                {item.prize}zł
              </h5>
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
                  placeholder="Ilość"
                  style={{ alignItems: "center" }}
                />

                <button
                  onClick={() => {
                    if (
                      quantity >= 1 &&
                      quantity <= 100 &&
                      typeof quantity === "number"
                    ) {
                      handleAddingToCart(item, quantity);
                    } else alert("Złe dane");
                  }}
                  type="button"
                  class="btn btn-danger ml-2"
                >
                  Dodaj do koszyka
                </button>
              </div>
            </span>
            <hr class="mb-2 mt-1 seperator" />
            <div class="d-flex align-items-center justify-content-between mt-1">
              {item.description}
            </div>
            <h5 class="mt-5">Opis:</h5>
            <hr class="mb-2 mt-1 seperator" />
            <div class="d-flex align-items-center justify-content-between mt-1">
              <div class="resetcss" itemprop="description">
                <h4>Maska filtrująca:</h4>
                <ul>
                  <li>zakładana na elastyczną gumkę</li>
                  <li>
                    metalowa klamra na wysokości nosa na zewnętrznej części
                    maski
                  </li>
                  <li>piankowa poduszka chroni nos przed odgnieceniem</li>
                  <li>
                    okrągły kształt półmaski zapewnia dopasowanie do twarzy
                  </li>
                  <li>idealna ochrona przed pyłami i drobnymi cząstkami</li>
                </ul>
                <p>
                  <strong>UŻYTKOWANIE I PRZECHOWYWANIE</strong>
                </p>
                <p>
                  W celu zapewnienia jak najlepszej szczelności części
                  twarzowej, sposób zakładania i dopasowywania półmasek powinien
                  przebiegać wg następującego schematu:
                </p>
                <p>
                  1. Przed założeniem półmaski, wstępnie ukształtować zacisk
                  nosowy poprzez jego zaciśnięcie, co poprawia późniejsze
                  dopasowanie półmaski do twarzy,
                </p>
                <p>
                  2. Umieścić część twarzową tak, aby przykrywała usta i nos,
                </p>
                <p>
                  3. Taśmy nagłowia założyć tak, aby dolna taśma obejmowała kark
                  poniżej ucha, a górna przechodziła z tyłu głowy nad uchem;
                </p>
                <p>
                  4. Dopasować wstępnie uformowany zacisk nosowy tak, aby
                  zapewnić szczelność;
                </p>
                <p>
                  5. Sprawdzić prawidłowość założenia; przyłożyć dłonie i
                  przytrzymać czaszę; mocno wydmuchnąć powietrze; w przypadku
                  nieszczelności wyregulować pozycję czaszy, zacisk nosowy lub
                  taśmy nagłowia.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Użytkowanie&nbsp;maski:</strong>
                </p>
                <p>
                  <strong>
                    <img
                      alt=""
                      height="171"
                      src="/public/assets//zak%C5%82adanie.jpg"
                      width="826"
                    />
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
