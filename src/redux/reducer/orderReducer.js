
const initialState = {
    orders: [],
    loading: false

};

const reducer = (state = initialState, action) => {

    if (action.type === 'LOAD_ACTIONS') {
        return {
            ...state,
            loading: true
        }
    }

    return state;
}

export default reducer;