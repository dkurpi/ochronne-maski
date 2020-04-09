import React, { Component } from "react";
import "./cart.css";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import promo from "../promo";

export default class Cart extends Component {
  state = {
    cart: [],
    customerInfo: {},
    isClicked: false,
    suma: 0,
    isPop: false,
  };

  popup = [];

  componentDidMount() {
    if (Cookies.get("maski-ochronne")) {
      const cookiesLog = JSON.parse(Cookies.get("maski-ochronne"));

      let suma = 0;
      const items = cookiesLog;
      items.forEach(
        (item) => (suma += item.quantity * item.prize * item.packet)
      );
      suma = suma.toFixed(2);
      this.setState({
        cart: cookiesLog,
        suma,
      });
    }
  }

  handleDelete = (e, index) => {
    this.props.cookiesDeleteItem(index);
  };
  sendOrder = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const numberStreet = document.getElementById("numberStreet").value;
    const adressCode = document.getElementById("adressCode").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const delivery = document.querySelector(".delivery");

    const divName = document.getElementById("name");
    const divSurname = document.getElementById("surname");
    const divTelephone = document.getElementById("telephone");
    const divEmail = document.getElementById("email");

    var text = delivery.options[delivery.selectedIndex].text;
    const orderMove = document.querySelector(".form-containers");
    const orderForm = document.querySelector(".orderForm");

    if (name === "") {
      divName.classList.add("validForm");
    } else divName.classList.remove("validForm");

    if (surname === "") {
      divSurname.classList.add("validForm");
    } else divSurname.classList.remove("validForm");

    if (telephone === "") {
      divTelephone.classList.add("validForm");
    } else divTelephone.classList.remove("validForm");

    if (email === "") {
      divEmail.classList.add("validForm");
    } else divEmail.classList.remove("validForm");

    const isformValid =
      name !== "" && surname !== "" && telephone !== "" && email !== "";

    if (isformValid) {
      var style = window.getComputedStyle(orderForm);
      var marginRight = style.getPropertyValue("margin-right");
      let marginRight1 = marginRight.split(""); // or newStr = [...str];
      marginRight1.splice(-2, 2);
      marginRight1 = marginRight1.join("");

      console.log({ marginRight1 });

      const translate = orderForm.offsetWidth + marginRight1 * 1;
      orderMove.style.transform = `translateX(${-translate}px)`;

      const customerInfo = {
        name,
        surname,
        city,
        adressCode,
        street,
        numberStreet,
        telephone,
        email,
        deliveryMethod: text,
        suma: this.state.suma,
      };
      this.setState({
        customerInfo,
        isClicked: true,
      });
    }

    const form = document.querySelector(".orderForm");
    const formPosition =
      document.body.scrollTop +
      form.getBoundingClientRect().top -
      window.innerHeight * 0.1;
    console.log(formPosition);

    document.body.scrollTo({
      top: formPosition,
      behavior: "smooth",
    });
  };
  sendToBackEnd = () => {
    const { cart, customerInfo } = this.state;
    const now = new Date();
    const dat1 = now.toString();
    const date = dat1.slice(0, 24);
    const data = {
      cart,
      customerInfo,
      date,
    };
    console.log(data);

    if (cart.length !== "") {
      fetch("/api/new-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.isSaved) {
            this.setState({
              isPop: true,
            });
          }
        });
    } else alert("Popraw dane");
  };

  resetCart = () => {};
  render() {
    const items = this.state.cart;
    let suma = 0;

    /////////// counting quantity of groups
    const quantityOfGroups = [0, 0, 0];
    items.forEach((item) => {
      suma += item.quantity * item.prize * item.packet;
      quantityOfGroups[item.group - 1] += item.quantity * item.packet * 1;
    });
    console.log(quantityOfGroups);
    /////////// counting sum
    console.log(promo);

    const quantityPrizes = [promo[0][0], promo[1][0], promo[2][0]];

    const quantities = [3, 5, 10, 20, 50, 100, 200];
    const quantitiesReversed = [...quantities];
    quantitiesReversed.reverse();

    quantityOfGroups.forEach((group, index) => {
      const ile = quantitiesReversed.find((qnt) => group >= qnt) || 0;
      const indexPromo = quantities.findIndex((qnts) => qnts === ile);
      quantityPrizes[index] = promo[index][indexPromo] || promo[index][0];
    });

    console.log({ quantityPrizes });

    ///////////
    let info = [];
    if (this.state.isClicked) {
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
      } = this.state.customerInfo;

      info = [
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
                <hr />W razie pytań prosimy o kontakt. Więcej informacji
                znajdziesz w zakładce <a href="/kontakt">kontakt</a>
              </span>
            </p>
            <br />
            <button onClick={this.sendToBackEnd} class="sendOrder">
              Potwierdź zamówienie
            </button>
          </div>
        </div>,
      ];
    }

    const listOfProducts = items.map((item, index) => {
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
                <div className="singleProduct__info-des">Masek w paczce:</div>
                <div className="singleProduct__info-des">Ilość paczek:</div>
                <div className="singleProduct__info-des">Łącznie masek:</div>
                <div className="singleProduct__info-des">Cena za sztukę:</div>
              </div>
              <div className="singleProduct__info">
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
            <button onClick={(e) => this.handleDelete(e, index)}>USUŃ</button>
          </div>

          <div className="singleProduct__prize">
            {" "}
            {[
              quantityPrizes[item.group - 1] * item.quantity * item.packet,
            ][0].toFixed(2)}{" "}
            PLN
          </div>
        </div>
      );
    });

    const groupSum = [0, 0, 0];
    groupSum.forEach(
      (group, index) =>
        (groupSum[index] = (
          quantityOfGroups[index] * quantityPrizes[index]
        ).toFixed(2)*1)
    );
    console.log(groupSum);
    const AllOrder = [
      <div style={{ justifyContent: "center" }} className="singleProduct">
        <div className="sizes">
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Rodzaj </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">Masek z gumkami:</div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">Masek z troczkami:</div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">Masek z haftem:</div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Ilość </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[0]} szt
              </div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[1]} szt
              </div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityOfGroups[2]} szt
              </div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Cena </div>
            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[0] === promo[0][0] ? (
                  quantityPrizes[0]
                ) : (
                  <>
                    <s style={{ color: "red", fontSize: "15px" }}>
                      {promo[0][0]}
                    </s>{" "}
                    {quantityPrizes[0]}{" "}
                  </>
                )}{" "}
                zł/szt
              </div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[1] === promo[1][0] ? (
                  quantityPrizes[1]
                ) : (
                  <>
                    <s style={{ color: "red", fontSize: "15px" }}>
                      {promo[1][0]}
                    </s>{" "}
                    {quantityPrizes[1]}{" "}
                  </>
                )}{" "}
                zł/szt
              </div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">
                {quantityPrizes[2] === promo[2][0] ? (
                  quantityPrizes[2]
                ) : (
                  <>
                    <s style={{ color: "red", fontSize: "15px" }}>
                      {promo[2][0]}
                    </s>{" "}
                    {quantityPrizes[1]}{" "}
                  </>
                )}{" "}
                zł/szt
              </div>
            )}
          </div>
          <div className="singleProduct__info flexbox-cart">
            <div className="singleProduct__info-des">Suma </div>

            {quantityOfGroups[0] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[0]} zł</div>
            )}
            {quantityOfGroups[1] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[1]} zł</div>
            )}
            {quantityOfGroups[2] === 0 ? null : (
              <div className="singleProduct__info-des">{groupSum[2]} zł</div>
            )}
          </div>
        </div>
      </div>,
      <div style={{ justifyContent: "flex-end" }} className="singleProduct">
        <div className="singleProduct--suma__des">Łącznie</div>
        <div className="singleProduct--suma__des">{(groupSum[0]+groupSum[1]+groupSum[2]).toFixed(2)} PLN</div>
      </div>,
    ];
    const orderInfo = [
      <div className="orderForm">
        <div className="orderForm__personalInfo">
          <span className="Text text__delivery"> Wprowadz swoje dane</span>
          <form action="">
            <input id="name" type="text" placeholder="Imię*" />
            <input id="surname" type="text" placeholder="Nazwisko*" />
            <input id="street" type="text" placeholder="Ulica" />
            <input
              id="numberStreet"
              type="text"
              placeholder="Numer mieszkania/lokalu"
            />
            <input id="city" type="text" placeholder="Miejscowość" />
            <input id="adressCode" type="text" placeholder="Kod Pocztowy" />
            <input
              id="telephone"
              type="tel"
              placeholder="Numer Telefonu*"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            ></input>
            <input id="email" type="text" placeholder="E-mail*" />
          </form>
          <div style={{ color: "gray", fontSize: "11px", margin: "2vh 2vw 0" }}>
            * - pola wymagane
          </div>
        </div>
        <div className="orderForm__delivery ">
          <span className="Text text__delivery"> Wybierz metodę płatności</span>
          <select className="delivery" name="delivery">
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
            <br /> W przypadku wysyłki za granicę koszt zgodnie z cennikiem
            Poczty Polskiej.
          </span>
          <button onClick={this.sendOrder} class="sendOrder">
            Przejdź dalej
          </button>
        </div>
      </div>,
    ];

    const popup = [
      <div className="popup">
        <div
          onClick={(e) => {
            document.querySelector(".popup").style.display = "none";
          }}
          className="popup__background"
        ></div>
        <div className="popup__content">
          <div className="popup__contentText">
            <div className="popup__title">Zamówienie zaakceptowane</div>
            Zamówienie zostało pomyślnie wysłane. Prosimy oczekiwać na{" "}
            <b>SMS</b> lub<b>e-mail</b>.
            <br />
            <br />
            Jeżeli nie widzą Państwo mail'a prosimy o sprawdzenie zakładki -
            SPAM.{" "}
          </div>
          <button
            onClick={() => {
              window.location.href = "/";
              document.querySelector(".popup").style.display = "none";
            }}
            class="sendOrder"
          >
            Zakończ
          </button>
        </div>
      </div>,
    ];

    return (
      <>
        <div className="productSiteWrapper">
          <div class="orderHeader">
            <div class="orderHeaderMask">
              <div className="orderHeaderMask__your-order">
                <span class="Text">Twoje zamówienie</span>
              </div>
            </div>
          </div>
          <div className="orderWrapper">
            <div className="orderedProducts">
              <div className="allProducts">
                {AllOrder}
                {listOfProducts}
              </div>
            </div>

            <div className="form-containers">
              {orderInfo}
              {info}
            </div>
          </div>
        </div>

        <Popup
          open={this.state.isPop}
          modal
          onClose={() => {
            this.setState({ isPop: false });
          }}
        >
          {(close) => (
            <div className="modale">
              <a
                className="close"
                onClick={() => {
                  close();
                }}
              >
                &times;
              </a>
              <h4 className="header"> Zamównie przyjęte do realizacji</h4>
              <hr />
              Zamówienie zostało pomyślnie wysłane. Zamówienie zostało pomyślnie
              wysłane. Prosimy oczekiwać na <b>SMS</b> lub <b>e-mail</b>.
              <br />
              <br />
              Jeżeli nie widzą Państwo mail'a prosimy o sprawdzenie zakładki -
              SPAM.{" "}
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    close();
                    window.location = "/";
                    Cookies.remove("maski-ochronne");
                  }}
                >
                  Zamknij
                </button>
              </div>
            </div>
          )}
        </Popup>
      </>
    );
  }
}
