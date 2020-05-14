import React, { useState } from "react";
import axios from "../axios-orders";

const OrderContext = React.createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);

  const loadOrders = () => {
    // Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true });

    //`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`
    axios
      .get(`orders.json`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        setState({ ...state, orders: loadedOrders });
      })
      .catch((err) => setState({ ...state, error: err }));
  };

  return (
    <OrderContext.Provider value={{ state, loadOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
