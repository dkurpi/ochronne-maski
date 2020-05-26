import React from "react";

export default function OrderInfo({ selectedItem: { customerInfo, cart } }) {
  const customerCart = cart.map(({ name, id, images, packet, quantity }) => {
    return (
      <div className="adminOrder__item ">
        <div className="singleCartItem__img">
          <a href={`/product/${id}`}>
            <img src={images[0]} alt="" />
          </a>
        </div>
        <div className="singleCartItem__info">
          <div className="singleCartItem__infoSingle">
            <a className="ahrefff" href={`/product/${id}`}>
              {name}
            </a>
          </div>

          <div className="singleCartItem__infoSingle">
            Masek w paczce: {packet}
          </div>
          <div className="singleCartItem__infoSingle">
            Ilość paczek: {quantity}
          </div>

          <div className="singleCartItem__infoSingle">
            <hr />
            <h6>{quantity * packet} maski</h6>
            <hr />
          </div>
        </div>
      </div>
    );
  });

  let deliveryPrice = 0;
  if (customerInfo.deliveryMethod === "Przelew na konto") deliveryPrice = 13.99;
  else if (customerInfo.deliveryMethod === "Płatność przy odbiorze")
    deliveryPrice = 21.99;

  const deliveryInformations = [
    <>
      <span className="Text text__delivery"> Dane osobowe:</span>
      <hr />
      <div className="adminOrder__singleTable">
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Imię</div>
          <div className="adminOrder__singleTableRow">{customerInfo.name}</div>
        </div>

        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Nazwisko</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.surname}
          </div>
        </div>

        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Ulica</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.street}
          </div>
        </div>

        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">
            Numer mieszkania/lokalu
          </div>

          <div className="adminOrder__singleTableRow">
            {customerInfo.numberStreet}
          </div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Miejscowość</div>

          <div className="adminOrder__singleTableRow">{customerInfo.city}</div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Kod Pocztowy</div>

          <div className="adminOrder__singleTableRow">
            {customerInfo.adressCode}
          </div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">E-mail</div>
          <div className="adminOrder__singleTableRow">{customerInfo.email}</div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Numer Telefonu</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.telephone}
          </div>
        </div>
        {/*rodzaje produktów */}
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Gumki</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.quantityOfGroups
              ? customerInfo.quantityOfGroups[0]
              : "-"}
            {"  "}
            szt, po {"  "}
            {customerInfo.quantityPrizes ? customerInfo.quantityPrizes[0] : "-"}
            {"  "}
            zł/szt
          </div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Troczki</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.quantityOfGroups
              ? customerInfo.quantityOfGroups[1]
              : "-"}
            {"  "}
            szt, po {"  "}
            {customerInfo.quantityPrizes ? customerInfo.quantityPrizes[1] : "-"}
            {"  "}
            zł/szt
          </div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Haft</div>
          <div className="adminOrder__singleTableRow">
            {customerInfo.quantityOfGroups
              ? customerInfo.quantityOfGroups[2]
              : "-"}
            {"  "}
            szt, po {"  "}
            {customerInfo.quantityPrizes ? customerInfo.quantityPrizes[2] : "-"}
            {"  "}
            zł/szt
          </div>
        </div>

        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Cena produktów </div>{" "}
          <div className="adminOrder__singleTableRow">
            {customerInfo.suma} PLN
          </div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Przesyłka </div>{" "}
          <div className="adminOrder__singleTableRow">{deliveryPrice} PLN</div>
        </div>
        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Sposób doręczenia</div>{" "}
          <div className="adminOrder__singleTableRow">
            {customerInfo.deliveryMethod}
          </div>
        </div>

        <div className="adminOrder__singleTableColumn">
          <div className="adminOrder__singleTableRow">Cena całkowita </div>{" "}
          <div className="adminOrder__singleTableRow">
            {[customerInfo.suma * 1 + deliveryPrice][0].toFixed(2)} PLN
          </div>
        </div>
        <div
          className={
            customerInfo.uwagi === "brak"
              ? "adminOrder__singleTableColumn"
              : "adminOrder__singleTableColumn red2"
          }
        >
          <div className="adminOrder__singleTableRow">Uwagi:</div>
          <div className="adminOrder__singleTableRow">{customerInfo.uwagi}</div>
        </div>
      </div>
    </>,
  ];

  return (
    <div className="adminOrder">
      <div className="adminOrder__personal-info">{deliveryInformations}</div>
      <div className="adminOrder__cart-info">{customerCart}</div>
    </div>
  );
}
