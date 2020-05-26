import React, { Component } from "react";
import "./cart.css";
import Popup from "reactjs-popup";
import promo from "../../products/promo";
import PrizeTable from "../PrizeTable/PrizeTable.js";
import OrderSummary from "./Sections/OrderSummary.js";
import { CustomerInfo, AcceptOrder } from "./Sections/Info.js";
import ListOfProducts from "./Sections/ListOfProducts.js";
import PopupContent from "./Sections/PopupContent.js";

export default class Cart extends Component {
  state = {
    cart: [],
    customerInfo: {
      name: "",
      surname: "",
      street: "",
      city: "",
      numberStreet: "",
      adressCode: "",
      telephone: "",
      email: "",
      deliveryMethod: "courier",
    },
    isClicked: false,
    suma: 0,
    isModalOpen: false,
  };

  handleInput = (event, property) => {
    const { value } = event.target;
    this.setState(({ customerInfo }) => {
      return { customerInfo: { ...customerInfo, [property]: value } };
    });
  };

  nextOrderSection = (quantityOfGroups, quantityPrizes) => {
    const { name, surname, telephone, email } = this.state.customerInfo;
    const divName = document.getElementById("name");
    const divSurname = document.getElementById("surname");
    const divTelephone = document.getElementById("telephone");
    const divEmail = document.getElementById("email");

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
      let marginRight1 = marginRight.split("");
      marginRight1.splice(-2, 2);
      marginRight1 = marginRight1.join("");
      const translate = orderForm.offsetWidth + marginRight1 * 1;
      orderMove.style.transform = `translateX(${-translate}px)`;

      const suma = (
        quantityOfGroups[0] * quantityPrizes[0] +
        quantityOfGroups[1] * quantityPrizes[1] +
        quantityOfGroups[2] * quantityPrizes[2]
      ).toFixed(2);

      const customerInfo = {
        ...this.state.customerInfo,
        quantityOfGroups,
        quantityPrizes,
        suma,
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
    const { customerInfo } = this.state;
    const { cart } = this.props;
    const now = new Date();
    const dat1 = now.toString();
    const date = dat1.slice(0, 24);

    const uwagi = document.getElementById("uwagi").value;
    if (uwagi) {
      customerInfo.uwagi = uwagi;
    } else customerInfo.uwagi = "brak";
    const data = {
      cart,
      customerInfo,
      date,
      status: "Nowe",
    };

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
              isModalOpen: true,
            });
          }
        });
    } else alert("Popraw dane");
  };
  render() {
    const { cart } = this.props;
    console.log(this.state.customerInfo);
    /////////// Quantity
    const quantityOfGroups = [0, 0, 0];
    cart.forEach((item) => {
      quantityOfGroups[item.group - 1] += item.quantity * item.packet * 1;
    });
    /////////// Discounts
    const quantityPrizes = [promo[0][0], promo[1][0], promo[2][0]];
    const quantities = [3, 5, 10, 20, 50, 100, 200];
    const quantitiesReversed = [...quantities];
    quantitiesReversed.reverse();
    quantityOfGroups.forEach((group, index) => {
      const ile = quantitiesReversed.find((qnt) => group >= qnt) || 0;
      const indexPromo = quantities.findIndex((qnts) => qnts === ile);
      quantityPrizes[index] = promo[index][indexPromo] || promo[index][0];
    });
    ///////////
    const groupSum = [0, 0, 0];
    groupSum.forEach(
      (group, index) =>
        (groupSum[index] =
          (quantityOfGroups[index] * quantityPrizes[index]).toFixed(2) * 1)
    );

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
                <PrizeTable />
                <OrderSummary
                  quantityOfGroups={quantityOfGroups}
                  quantityPrizes={quantityPrizes}
                  groupSum={groupSum}
                  promo={promo}
                />
                <ListOfProducts
                  quantityPrizes={quantityPrizes}
                  items={cart}
                  cookiesDeleteItem={this.props.cookiesDeleteItem}
                />
              </div>
            </div>
            <div className="form-containers">
              <CustomerInfo
                quantityOfGroups={quantityOfGroups}
                quantityPrizes={quantityPrizes}
                nextOrderSection={this.nextOrderSection}
                handleInput={this.handleInput}
                customerInfo={this.state.customerInfo}
              />
              <AcceptOrder
                customerInfo={this.state.customerInfo}
                sendToBackEnd={this.sendToBackEnd}
              />
            </div>
          </div>
        </div>
        <Popup
          open={this.state.isModalOpen}
          modal
          onClose={() => {
            this.setState({ isModalOpen: false });
          }}
        >
          {(close) => <PopupContent close={close} />}
        </Popup>
      </>
    );
  }
}
