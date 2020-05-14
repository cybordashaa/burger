import React, { useState } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

const BurgerPage = props => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const continueOrder = () => {
    props.history.push("/ship");
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary onCancel={closeConfirmModal} onContinue={continueOrder} />
      </Modal>

      <Burger />

      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
