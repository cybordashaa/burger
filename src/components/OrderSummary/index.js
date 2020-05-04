import React from 'react';


const OrderSummary = (props) => {
    return (
        <div>
            <h3>Таны захиалга </h3>
            <p>Таны сонгосон орцууд:</p>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li key={el}>{props.ingredientsNames[el]}: {props.ingredients[el]}</li>
                ))}
            </ul>
            <p><strong>Захиалгын дүн: {props.price}₮</strong></p>
            <p>Цааш үргэлжлүүлэх үү?</p>
        </div>
    )
};


export default OrderSummary;