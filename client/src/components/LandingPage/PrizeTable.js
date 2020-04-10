import React from "react";
import promo from "../promo";

export default function PrizeTable() {
  return (
    <>
      <div style={{ justifyContent: "center" }} className="singleProduct header--main">
        <div className="absolute">
          <h4 style={{ textAlign: "center" }}>Cennik </h4>
          <hr />
          <div className="sizes">
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Ilość </div>
              <div className="singleProduct__info-des">Poniżej 20 szt</div>
              <div className="singleProduct__info-des">Powyżej 20 szt</div>
              <div className="singleProduct__info-des">Powyżej 50 szt</div>
              <div className="singleProduct__info-des">Powyżej 100 szt</div>
              <div className="singleProduct__info-des">Powyżej 200 szt</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Gumki </div>

              <div className="singleProduct__info-des">{promo[0][2]}</div>
              <div className="singleProduct__info-des">{promo[0][3]}</div>
              <div className="singleProduct__info-des">{promo[0][4]}</div>
              <div className="singleProduct__info-des">{promo[0][5]}</div>
              <div className="singleProduct__info-des">{promo[0][6]}</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Troczki </div>

              <div className="singleProduct__info-des">{promo[1][2]}</div>
              <div className="singleProduct__info-des">{promo[1][3]}</div>
              <div className="singleProduct__info-des">{promo[1][4]}</div>
              <div className="singleProduct__info-des">{promo[1][5]}</div>
              <div className="singleProduct__info-des">{promo[1][6]}</div>
            </div>
            <div className="singleProduct__info flexbox-cart">
              <div className="singleProduct__info-des">Haft </div>
              <div className="singleProduct__info-des">{promo[2][2]}</div>
              <div className="singleProduct__info-des">{promo[2][3]}</div>
              <div className="singleProduct__info-des">{promo[2][4]}</div>
              <div className="singleProduct__info-des">{promo[2][5]}</div>
              <div className="singleProduct__info-des">{promo[2][6]}</div>
            </div>
          </div>
          <hr />
          <i style={{ textAlign: "center", fontSize: "12px", color: "gray" }}>
            Cena za sztulę
          </i>{" "}
          <br />
          <i style={{ textAlign: "center", fontSize: "12px", color: "gray" }}>
            *Promocja działa także przy zakupie różnych wzorów{" "}
          </i>
        </div>
      </div>
    </>
  );
}
