import React, { Component } from "react";
import "./Admin.css";
import AdminLogin from "./AdminLogin";
import Cookies from "js-cookie";

export default class AdminOrders extends Component {
  state = {
    isLoaded: false,
    auth: false
  };

  handleListClick = item => {
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
      behavior: "smooth"
    });
  };

  loadItem = () => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(res => {
        const { orders } = res.orders;
        const item = orders[orders.length - 1];
        console.log(orders);
        this.setState({
          orders,
          isLoaded: true,
          item
        });
      });
  };

  async componentDidMount() {
    const key = Cookies.get("maseczki-ochronne-admin");
    if (key === "eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk") {
      this.setState({
        auth: true
      });
    }
  }

  render() {
    if (this.state.auth) {
      this.loadItem();
      if (this.state.isLoaded) {
        const items = this.state.orders;
        const { customerInfo, cart } = this.state.item;

        const listOfProducts = items.map((item, index) => {
          let sum = 0;

          item.cart.forEach(i => {
            sum += i.prize;
          });

          return (
            <>
              <tr
                onClick={() => {
                  this.handleListClick(item);
                }}
              >
                <th>{index}</th>
                <th>{item.customerInfo.name}</th>
                <th>{item.customerInfo.surname}</th>
                <th>{item.customerInfo.city}</th>
                <th>{item.cart.length}</th>
                <th>{item.customerInfo.suma}</th>
                <th>{item.customerInfo.telephone}</th>
                <th>{item.customerInfo.email}</th>
                <th>{item.customerInfo.deliveryMethod}</th>
                <th>{item.date}</th>
              </tr>
            </>
          );
        });
        let suma = 0;
        const customerCart = cart.map(item => {
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
                  <a href={`/product/${item.id}`}>{item.name}</a>
                </div>

                <div className="singleCartItem__infoSingle">
                  Masek w paczce: {item.packet}
                </div>
                <div className="singleCartItem__infoSingle">
                  Ilość paczek: {item.quantity}
                </div>
                <div className="singleCartItem__infoSingle">
                  Cena: {item.prize}zł za sztukę
                </div>
                <div
                  className="singleCartItem__infoSingle"
                  style={{ marginTop: "auto" }}
                >
                  <hr />
                  <h6>
                    Łącznie:{" "}
                    {[item.prize * item.packet * item.quantity][0].toFixed(2)}zł
                    za {item.quantity * item.packet} sztuk
                  </h6>
                  <hr />
                </div>
              </div>
            </div>
          );
        });

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
                    Cena produktów{" "}
                  </div>{" "}
                  <div className="adminOrder__singleTableRow">
                    {customerInfo.suma} PLN
                  </div>
                </div>
              </div>
            </div>
            <div className="adminOrder__cart-info">{customerCart}</div>
          </div>
        ];

        return (
          <>
            <div className="containterOrders">
              <div style={{ height: "5em" }}></div>
              <span className="Text text__delivery"> Zamówienia</span>
              <hr size="2px" width="100%" />
              <table>
                <tr>
                  <th>index</th>
                  <th>Imie</th>
                  <th>Nazwisko</th>
                  <th>Miasto</th>
                  <th>Ilość przedmiotów</th>
                  <th>Cena</th>
                  <th>Telefon</th>
                  <th>E-mail</th>
                  <th>Sposób przesyłki</th>
                  <th>Data</th>
                </tr>

                {listOfProducts}
              </table>
              {adminOrder}
            </div>
            <div className="logout">
              <a
                onClick={e => {
                  Cookies.remove("maseczki-ochronne-admin");
                }}
                className="panel__menuItem"
                href="/zamowienia"
              >
                wyloguj
              </a>
            </div>
          </>
        );
      } else return <h2 className="product__name mt-5">Loading...</h2>;
    } else return <AdminLogin />;
  }
}

// const cart = item.cart.map(item => {
//   console.log(item);
//   return (
//     <>
//       <div className="singleCartItem">
// <div className="singleCartItem__img">
//   <a href={`/product/${item.id}`}>
//     <img src={item.imgSrc[0]} alt="" />
//   </a>
// </div>
// <div className="singleCartItem__info">
//   <div className="singleCartItem__infoSingle">
//     <a href={`/product/${item.id}`}>{item.name}</a>
//   </div>
//   <div className="singleCartItem__infoSingle">
//     Rozmiar {item.size}
//   </div>
//   <div className="singleCartItem__infoSingle">
//     Cena {item.prize}
//   </div>
// </div>
//       </div>
//     </>
//   );
// });
