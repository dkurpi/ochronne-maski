import React from "react";
import promo from "../../products/promo";

export default function PrizeTable() {
  return (
    <>
      <div
        style={{ justifyContent: "center" }}
        className="singleProduct header--main"
      >
        <div className="absolute">
          <h4 style={{ textAlign: "center" }}>Cennik<i style={{ textAlign: "center", fontSize: "12px", color: "gray" }}>
            {"  "}(Cena za sztukę)
          </i>{" "} </h4>
          
          <hr />
          <div className="sizes">
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Ilość </div>
              <div className="singleProduct__info-des">Poniżej 20 szt</div>
              <div className="singleProduct__info-des">Powyżej 20 szt</div>
              <div className="singleProduct__info-des">Powyżej 50 szt</div>
              <div className="singleProduct__info-des">Powyżej 100 szt</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Gumki </div>

              <div className="singleProduct__info-des">{promo[0][2]}</div>
              <div className="singleProduct__info-des">{promo[0][3]}</div>
              <div className="singleProduct__info-des">{promo[0][4]}</div>
              <div className="singleProduct__info-des">{promo[0][5]}</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Troczki </div>

              <div className="singleProduct__info-des">{promo[1][2]}</div>
              <div className="singleProduct__info-des">{promo[1][3]}</div>
              <div className="singleProduct__info-des">{promo[1][4]}</div>
              <div className="singleProduct__info-des">{promo[1][5]}</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Haft </div>
              <div className="singleProduct__info-des">{promo[2][2]}</div>
              <div className="singleProduct__info-des">{promo[2][3]}</div>
              <div className="singleProduct__info-des">{promo[2][4]}</div>
              <div className="singleProduct__info-des">{promo[2][5]}</div>
            </div>
          </div>
          
          <hr />
          <i style={{ textAlign: "center", fontSize: "12px", color: "gray" }}>
            *Promocja działa także przy zakupie różnych wzorów <br />
            *Możliwość zamówienia różnych kolorow w paczce. Rodzaje kolorów
            można wypisać w polu "Uwagi", po wprowadzeniu danych osobowych.
          </i>
        </div>
      </div>
    </>
  );
}
