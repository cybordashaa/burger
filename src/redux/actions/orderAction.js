import axios from '../../axios-orders';
/// thunk d zoruilsan tusgai dispatch action
export const loadOrders = (userId) => {
    return function (dispatch, getState) {
        // zahialga tatj ehllee gedgiig medne

        // eniig huleej awaad spinner ajillaj ehlene
        dispatch(loadOrdersStart());
        const token = getState().signupReducer.token;

        axios.get(`orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`).then(response => {
            const loadedOrders = Object.entries(response.data).reverse();

            dispatch(loadOrdersSuccess(loadedOrders));
        }).catch(err => dispatch(loadOrdersError(err)));

    }
};

export const loadOrdersStart = () => {
    return {
        type: 'LOAD_ORDERS_START'
    }
}

export const loadOrdersError = error => {
    return {
        type: 'LOAD_ORDERS_ERROR',
        error
    }
}

export const loadOrdersSuccess = (loadedOrders) => {
    return {
        type: 'LOAD_ORDERS_SUCCESS',
        orders: loadedOrders
    }
}

// zahialga hadgalah heseg

export const saveOrder = (newOrder) => {

    return function (dispatch, getState) {
        // spinner show
        dispatch(saveOrderStart());

        const token = getState().signupReducer.token;
        // firebase save
        axios.post(`/orders.json?auth=${token}`, newOrder).then(response => {
            dispatch(saveOrderSuccess(response))
        }).catch(error => {
            dispatch(saveOrderError(error))

        });
    }

}
export const saveOrderStart = () => {
    return {
        type: "SAVE_ORDER_START"
    }
}

export const saveOrderSuccess = savedOrder => {
    return {
        type: "SAVE_ORDER_SUCCESS",
        savedOrder
    }
}

export const saveOrderError = error => {
    return {
        type: "SAVE_ORDER_ERROR",
        error
    }
}