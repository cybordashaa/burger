const initialState = {
  saving: false,
  firebaseError: null,
  token: null,
  userId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true
      };

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message
      };

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.data.idToken,
        userId: action.data.localId
      };

    default:
      return state;
  }
};

export default reducer;
