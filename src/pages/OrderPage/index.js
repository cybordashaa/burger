import React, { useEffect, useContext } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrdersContext";
import UserContext from '../../context/UserContext';

const OrderPage = (props) => {
  useEffect(() => {
    orderContext.loadOrders(userCTX.state.userId, userCTX.state.token);
  }, []);

  const orderContext = useContext(OrderContext);
  const userCTX = useContext(UserContext);
  const countObj = orderContext.state.orders;

  if (countObj.length === 0) {

    return (<div>No Content</div>)
  } else {
    return (
      <div>
        {orderContext.state.loading ? (
          <Spinner />
        ) : (
            orderContext.state.orders.map((el) => (
              <Order key={el[0]} order={el[1]} />
            ))
          )}
      </div>
    );
  }

};

export default OrderPage;
