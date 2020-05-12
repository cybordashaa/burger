const initialState = {

  logginIn: false,
  saving: false,
  firebaseError: null,
  firebaseErrorCode: null,
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

    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true
      }
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.data.idToken,
        userId: action.data.localId
      }
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.code
      };

    default:
      return state;
  }
};

export default reducer;
