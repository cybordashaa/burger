import axios from '../../axios-orders';
/// thunk d zoruilsan tusgai dispatch action
export const loadOrders = () => {
    return function (dispatch) {
        // zahialga tatj ehllee gedgiig medne

        // eniig huleej awaad spinner ajillaj ehlene
        dispatch(loadOrdersStart());

        axios.get('/orders.json').then(response => {
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