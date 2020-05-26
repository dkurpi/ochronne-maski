import React from "react";

export function CustomerInfo({
  quantityOfGroups,
  quantityPrizes,
  nextOrderSection,
  handleInput,
  customerInfo,
}) {
  const {
    name,
    surname,
    street,
    city,
    numberStreet,
    adressCode,
    telephone,
    email,
    deliveryMethod,
  } = customerInfo;
  return (
    <div className="orderForm">
      <div className="orderForm__personalInfo">
        <span className="Text text__delivery"> Wprowadz swoje dane</span>
        <form action="">
          <input
            onChange={(e) => handleInput(e, "name")}
            value={name}
            id="name"
            type="text"
            placeholder="Imię*"
          />
          <input
            onChange={(e) => handleInput(e, "surname")}
            value={surname}
            id="surname"
            type="text"
            placeholder="Nazwisko*"
          />
          <input
            onChange={(e) => handleInput(e, "street")}
            value={street}
            id="street"
            type="text"
            placeholder="Ulica"
          />
          <input
            onChange={(e) => handleInput(e, "numberStreet")}
            value={numberStreet}
            id="numberStreet"
            type="text"
            placeholder="Numer mieszkania/lokalu"
          />
          <input
            onChange={(e) => handleInput(e, "city")}
            value={city}
            id="city"
            type="text"
            placeholder="Miejscowość"
          />
          <input
            onChange={(e) => handleInput(e, "adressCode")}
            value={adressCode}
            id="adressCode"
            type="text"
            placeholder="Kod Pocztowy"
          />
          <input
            onChange={(e) => handleInput(e, "telephone")}
            value={telephone}
            id="telephone"
            type="tel"
            placeholder="Numer Telefonu*"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          ></input>
          <input
            onChange={(e) => handleInput(e, "email")}
            value={email}
            id="email"
            type="text"
            placeholder="E-mail*"
          />
        </form>
        <div style={{ color: "gray", fontSize: "11px", margin: "2vh 2vw 0" }}>
          * - pola wymagane
        </div>
      </div>
      <div className="orderForm__delivery ">
        <span className="Text text__delivery"> Wybierz metodę płatności</span>
        <select
          onChange={(e) => handleInput(e, "deliveryMethod")}
          value={deliveryMethod}
          className="delivery"
          name="delivery"
        >
          <option id="option" value="courier">
            Płatność przy odbiorze
          </option>
          <option id="option" value="account">
            Przelew na konto
          </option>
        </select>
        <span className="deliveryInfo">
          Dostawę zamówionych produktów realizujemy za pośrednictwem firmy
          kurierskiej DPD <br />
          <br />
          Koszt przesyłki naliczamy zgodnie z taryfikatorem: <br />
          <br />
          <b>13,99 zł</b> przesyłka za wcześniejszym przelewem na konto
          <br /> <b>21,99 zł</b> przesyłka pobraniowa
          <br />
          <br /> W przypadku wysyłki za granicę koszt zgodnie z cennikiem Poczty
          Polskiej.
        </span>
        <button
          onClick={() => nextOrderSection(quantityOfGroups, quantityPrizes)}
          class="sendOrder"
        >
          Przejdź dalej
        </button>
      </div>
    </div>
  );
}

export function AcceptOrder({ customerInfo, sendToBackEnd }) {
  const {
    name,
    surname,
    city,
    adressCode,
    telephone,
    email,
    street,
    numberStreet,
    deliveryMethod,
  } = customerInfo;
  return (
    <div className="orderForm">
      <div className="orderForm__personalInfo">
        <span className="Text text__delivery">
          Sprawdź poprawność danych
          <hr />
        </span>
        <div className="orderCheck">
          {`${name}`}
          {`${surname}`}
          <br />
          {street} {numberStreet}
          <br />
          {`${adressCode}`} {`${city}`}
          <br />
          {`${telephone}`}
          <br />
          {`${email}`}
          <br />
          {`${deliveryMethod}`}
          <br />
        </div>
        <br />
        Uwagi:
        <br />
        <textarea id="uwagi" rows="4" cols="50"></textarea>
        <br></br>
        <button
          onClick={() => {
            const orderMove = document.querySelector(".form-containers");
            orderMove.style.transform = "translateX(0)";
          }}
          class="sendOrder"
        >
          wróć
        </button>
      </div>
      <div className="orderForm__delivery orderForm__delivery--pay">
        <h3>
          <span className="Text text__delivery">Formy płatności</span>
        </h3>
        <p>
          <span style={{ fontWeight: "400" }}>
            Istnieje możliwość płatności w dwóch formach:
          </span>
        </p>
        <ol>
          <li style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "400" }}>Przelew na konto</span>
          </li>
          <li style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "400" }}>
              Płatności przy pobraniu paczki
            </span>
          </li>
        </ol>
        <p>
          <hr />
          Po powierdzeniu zamówienia, skontaktujemy się z Toba telefonicznie
          (SMS) lub drogą meilową.
          <span style={{ fontWeight: "400" }}>
            <hr />W razie pytań prosimy o kontakt. Więcej informacji znajdziesz
            w zakładce <a href="/kontakt">kontakt</a>
          </span>
        </p>
        <br />
        <button onClick={sendToBackEnd} class="sendOrder">
          Potwierdź zamówienie
        </button>
      </div>
    </div>
  );
}
