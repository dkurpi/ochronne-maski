import React from "react";

export default function ListOfProducts({
  quantityPrizes,
  items,
  handleDeleteItemFromCart,
}) {
  const list = items.map((item, index) => {
    return (
      <div className="singleProduct">
        <div className="singleProduct__image">
          <a href={`/product/${item.id}`}>
            <img src={item.images[0]} width="100" alt="" />
          </a>
        </div>
        <div className="singleProduct__name">
          <a href={`/product/${item.id}`}>{item.name}</a>

          <div className="sizes">
            <div className="singleProduct__info">
              <div className="singleProduct__info-des">Rodzaj:</div>
              <div className="singleProduct__info-des">Masek w paczce:</div>
              <div className="singleProduct__info-des">Ilość paczek:</div>
              <div className="singleProduct__info-des">Łącznie masek:</div>
              <div className="singleProduct__info-des">Cena za sztukę:</div>
            </div>
            <div className="singleProduct__info">
              <div className="singleProduct__info-des">
                {item.group === 1
                  ? "Gumki"
                  : item.group === 2
                  ? "Troczki"
                  : item.group === 3
                  ? "Haft"
                  : "-"}
              </div>
              <div className="singleProduct__info-des">{item.packet}</div>
              <div className="singleProduct__info-des"> {item.quantity}</div>
              <div className="singleProduct__info-des">
                {item.packet * item.quantity}
              </div>
              <div className="singleProduct__info-des">
                {" "}
                {quantityPrizes[item.group - 1]}
              </div>
            </div>
          </div>
          <button onClick={(e) => handleDeleteItemFromCart(e, index)}>USUŃ</button>
        </div>

        <div className="singleProduct__prize">
          {[
            quantityPrizes[item.group - 1] * item.quantity * item.packet,
          ][0].toFixed(2)}{" "}
          PLN
        </div>
      </div>
    );
  });

  return list;
}
