import React from "react";

export default function TableWithOrders({
  orders,
  handleItemState,
  loadItems,
}) {
  const handleListClick = (order) => {
    handleItemState(order);
    const info = document.querySelector(".adminOrder");
    const infoPosition =
      document.body.scrollTop +
      info.getBoundingClientRect().top -
      document.body.offsetHeight * 0.1;

    document.body.scrollTo({
      top: infoPosition,
      behavior: "smooth",
    });
  };

  const handleModyfing = (target, status) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target, status }),
    };

    fetch("/api/modifyOrder", options)
      .then((res) => res.json())
      .then((res) => {
        loadItems();
      });
  };

  const listOfProducts = orders.map((order, index) => {
    const { customerInfo, _id, status, date } = order;
    let deliveryPrice = 0;

    if (customerInfo.deliveryMethod === "Przelew na konto")
      deliveryPrice = 13.99;
    else if (customerInfo.deliveryMethod === "Płatność przy odbiorze")
      deliveryPrice = 21.99;

    const customerCartSum = (
      parseFloat(customerInfo.suma) + deliveryPrice
    ).toFixed(2);
    
    return (
      <>
        <tr className={status}>
          <th
            style={{ width: "50px !important" }}
            onClick={() => {
              handleListClick(order);
            }}
          >
            Pokaż
          </th>
          <th>{index}</th>
          <th>{customerInfo.name}</th>
          <th>{customerInfo.surname}</th>
          <th>{customerInfo.city}</th>
          <th>{customerCartSum}</th>
          <th>{customerInfo.telephone}</th>
          <th>{customerInfo.email}</th>
          <th
            className={
              customerInfo.deliveryMethod === "Płatność przy odbiorze"
                ? "red2"
                : null
            }
          >
            {customerInfo.deliveryMethod}
          </th>
          <th>{date}</th>
          <th>{status}</th>
          <button
            onClick={() => {
              handleModyfing(_id, "Nowe");
            }}
          >
            Nowe
          </button>
          <button
            onClick={() => {
              handleModyfing(_id, "Przelew");
            }}
          >
            Przelew
          </button>
          <button
            onClick={() => {
              handleModyfing(_id, "Wysłane");
            }}
          >
            Wysłane
          </button>
        </tr>
      </>
    );
  });

  return (
    <>
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
    </>
  );
}
