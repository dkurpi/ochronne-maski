import React, { Component } from "react";
import "./Admin.css";
import AdminLogin from "./AdminLogin";
import Logout from "./Sections/Logout";
import TableWithOrders from "./Sections/TableWithOrders";
import OrderInfo from "./Sections/OrderInfo";
import Cookies from "js-cookie";

export default class AdminOrders extends Component {
  state = {
    isLoaded: false,
    isLogged: false,
    orders: [],
    selectedItem: {},
  };

  handleItemState = (item) => {
    this.setState({ selectedItem: item });
  };

  loadItems = () => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((res) => {
        const { orders } = res.orders;
        const selectedItem = orders[orders.length - 1];
        this.setState({
          orders,
          selectedItem,
          isLoaded: true,
        });
      });
  };

  async componentDidMount() {
    const key = Cookies.get("maseczki-ochronne-admin");
    if (key === "eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk") {
      this.setState({
        isLogged: true,
      });
      this.loadItems();
    }
  }

  render() {
    if (!this.state.isLogged) return <AdminLogin />;
    if (!this.state.isLoaded)
      return <h2 className="product__name mt-5">Loading...</h2>;

    const { orders, selectedItem } = this.state;

    return (
      <>
        <div className="containterOrders">
          <Logout />
          <TableWithOrders
            orders={orders}
            handleItemState={this.handleItemState}
            loadItems={this.loadItems}
          />
          <OrderInfo selectedItem={selectedItem} />
        </div>
      </>
    );
  }
}
