import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";


const BurgerPage = props => {

  // useState d 2 utga butsaadag ter ni massive baidg
  const [confirmOrder, setConfirmOrder] = useState(false);
  // val[0]// jinhen ugugdul
  // [a, b] masiive zadalj awah 
  // val[1] ene ugugdliig uurchluh function bdg


  const continueOrder = () => {
    props.history.push("/ship");

    closeConfirmModal();
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };




  return (
    <div>
      <Modal
        closeConfirmModal={closeConfirmModal}
        show={confirmOrder}
      >

        <OrderSummary
          onCancel={closeConfirmModal}
          onContinue={continueOrder}
        />

      </Modal>

      <Burger />
      <BuildControls
        showConfirmModal={showConfirmModal}
      />
    </div>
  );

}


export default BurgerPage;
