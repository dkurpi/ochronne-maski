import React, { Component } from "react";
import "./Admin.css";
import AdminLogin from "./AdminLogin";
import Cookies from "js-cookie";

export default class AdminOrders extends Component {
  state = {
    isLoaded: false,
    auth: false,
  };

  handleListClick = (item) => {
    console.log("działa");
    this.setState({ item });
    const info = document.querySelector(".adminOrder");
    const infoPosition =
      document.body.scrollTop +
      info.getBoundingClientRect().top -
      document.body.offsetHeight * 0.1;
    console.log(infoPosition);

    document.body.scrollTo({
      top: infoPosition,
      behavior: "smooth",
    });
  };

  loadItem = () => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((res) => {
        const { orders } = res.orders;
        const item = orders[orders.length - 1];
        console.log(orders);
        this.setState({
          orders,
          isLoaded: true,
          item,
        });
      });
  };

  handleModyfing = (target, status) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target, status }),
    };

    fetch("/api/orderModify", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.loadItem();
      });
  };

  async componentDidMount() {
    const key = Cookies.get("maseczki-ochronne-admin");
    if (key === "eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk") {
      this.loadItem();

      this.setState({
        auth: true,
      });
    }
  }

  render() {
    if (this.state.auth) {
      if (this.state.isLoaded) {
        const items = this.state.orders;
        const { customerInfo, cart } = this.state.item;

        const listOfProducts = items.map((item, index) => {
          let sum = 0;

          item.cart.forEach((i) => {
            sum += i.prize;
          });

          return (
            <>
              <tr className={item.status}>
                <th
                  style={{ width: "50px !important" }}
                  onClick={() => {
                    this.handleListClick(item);
                  }}
                >
                  Pokaż
                </th>
                <th>{index}</th>
                <th>{item.customerInfo.name}</th>
                <th>{item.customerInfo.surname}</th>
                <th>{item.customerInfo.city}</th>
                <th>{item.customerInfo.suma}</th>
                <th>{item.customerInfo.telephone}</th>
                <th>{item.customerInfo.email}</th>
                <th
                  className={
                    item.customerInfo.deliveryMethod ===
                    "Płatność przy odbiorze"
                      ? "red2"
                      : null
                  }
                >
                  {item.customerInfo.deliveryMethod}
                </th>
                <th>{item.date}</th>
                <th>{item.status}</th>
                <button
                  onClick={() => {
                    this.handleModyfing(item._id, "Nowe");
                  }}
                >
                  Nowe
                </button>
                <button
                  onClick={() => {
                    this.handleModyfing(item._id, "Przelew");
                  }}
                >
                  Przelew
                </button>
                <button
                  onClick={() => {
                    this.handleModyfing(item._id, "Wysłane");
                  }}
                >
                  Wysłane
                </button>
                {/* <button>P</button>
                <button>M</button> */}
              </tr>
            </>
          );
        });
        let suma = 0;
        const customerCart = cart.map((item) => {
          suma += item.prize;
          return (
            <div className="adminOrder__item ">
              <div className="singleCartItem__img">
                <a href={`/product/${item.id}`}>
                  <img src={item.images[0]} alt="" />
                </a>
              </div>
              <div className="singleCartItem__info">
                <div className="singleCartItem__infoSingle">
                  <a className="ahrefff" href={`/product/${item.id}`}>
                    {item.name}
                  </a>
                </div>

                <div className="singleCartItem__infoSingle">
                  Masek w paczce: {item.packet}
                </div>
                <div className="singleCartItem__infoSingle">
                  Ilość paczek: {item.quantity}
                </div>

                <div className="singleCartItem__infoSingle">
                  <hr />
                  <h6>{item.quantity * item.packet} maski</h6>
                  <hr />
                </div>
              </div>
            </div>
          );
        });
        ////////Cena przesyłki
        let deliveryPrice = 0;

        if (customerInfo.deliveryMethod === "Przelew na konto")
          deliveryPrice = 13.99;
        else if (customerInfo.deliveryMethod === "Płatność przy odbiorze")
          deliveryPrice = 21.99;

        ////////////Tabelka
        const adminOrder = [
          <div className="adminOrder">
            <div className="adminOrder__personal-info">
              <span className="Text text__delivery"> Dane osobowe:</span>
              <hr />
              <div className="adminOrder__singleTable">
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">Imię</div>
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.name}
                  </div>
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

                  <div className="adminOrder__singleTableRow">
                    {customerInfo.city}
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">Kod Pocztowy</div>

                  <div className="adminOrder__singleTableRow">
                    {customerInfo.adressCode}
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">E-mail</div>
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.email}
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">
                    Numer Telefonu
                  </div>
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
                    {customerInfo.quantityPrizes
                      ? customerInfo.quantityPrizes[0]
                      : "-"}
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
                    {customerInfo.quantityPrizes
                      ? customerInfo.quantityPrizes[1]
                      : "-"}
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
                    {customerInfo.quantityPrizes
                      ? customerInfo.quantityPrizes[2]
                      : "-"}
                    {"  "}
                    zł/szt
                  </div>
                </div>

                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">
                    Cena produktów{" "}
                  </div>{" "}
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.suma} PLN
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">Przesyłka </div>{" "}
                  <div className="adminOrder__singleTableRow">
                    {deliveryPrice} PLN
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">
                    Sposób doręczenia
                  </div>{" "}
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.deliveryMethod}
                  </div>
                </div>

                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">
                    Cena całkowita{" "}
                  </div>{" "}
                  <div className="adminOrder__singleTableRow">
                    {[customerInfo.suma * 1 + deliveryPrice][0].toFixed(2)} PLN
                  </div>
                </div>
                <div className="adminOrder__singleTableColumn">
                  <div className="adminOrder__singleTableRow">Uwagi:</div>
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.uwagi}
                  </div>
                </div>
              </div>
            </div>
            <div className="adminOrder__cart-info">{customerCart}</div>
          </div>,
        ];

        return (
          <>
            <div className="containterOrders">
              <div style={{ height: "5em" }}></div>

              <div className="logout">
                <a
                  onClick={(e) => {
                    Cookies.remove("maseczki-ochronne-admin");
                  }}
                  className="panel__menuItem"
                  href="/zamowienia"
                >
                  wyloguj
                </a>
                <div style={{ height: "1em" }}></div>
              </div>
              <span className="Text text__delivery"> Zamówienia</span>
              <hr size="2px" width="100%" />
              <table>
                <tr>
                  <th></th>
                  <th>id</th>
                  <th>Imie</th>
                  <th>Nazwisko</th>
                  <th>Miasto</th>
                  <th>Cena</th>
                  <th>Telefon</th>
                  <th>E-mail</th>
                  <th>Sposób przesyłki</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>

                {listOfProducts}
              </table>
              {adminOrder}
            </div>
          </>
        );
      } else return <h2 className="product__name mt-5">Loading...</h2>;
    } else return <AdminLogin />;
  }
}
