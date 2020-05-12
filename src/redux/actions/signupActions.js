import axios from "axios";
import { loginUserSuccess } from './loginAction';
export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
        data
      )
      .then(result => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem('token', token);
        localStorage.setItem("userId", userId);

        dispatch(signupUserSuccess(token, userId));
      })
      .catch(err => {
        dispatch(signupUserError(err));
      });
  };
};

export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START"
  };
};

export const signupUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId
  };
};

export const signupUserError = error => {
  return {
    type: "SIGNUP_USER_ERROR",
    error
  };
};


export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expireDate");
  return {
    type: 'LOGOUT'
  }
}

export const autoLoginAfterMillisec = (ms) => {
  return function (dispatch) {
    // token shinechleed login hiih
    // https://securetoken.googleapis.com/v1/token?key=[API_KEY]
    // axios
    //   .post(
    //     "https://securetoken.googleapis.com/v1/token?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
    //     {
    //       grant_type: "refresh_token",
    //       refresh_token: localStorage.getItem('refresh_token')
    //     }
    //   )
    //   .then(result => {
    //     const token = result.data.id_token;
    //     const userId = result.data.user_id;
    //     dispatch(loginUserSuccess(token, userId));

    //   })
    //   .catch(err => {
    //     dispatch(signupUserError(err));
    //   });

    setTimeout(() => {
      dispatch(logout())
    }, ms)
  }
}