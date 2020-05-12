import axios from 'axios';

export const loginUser = (email, password) => {

    const data = {
        email,
        password,
        returnSecureToken: true
    }
    return function (dispatch) {
        dispatch(loginUserStart());
        //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo', data).then(result => {
            // localstorage ruu hadgalna 
            const token = result.data.idToken;
            const userId = result.data.localId;
            localStorage.setItem('token', token);
            localStorage.setItem("userId", userId);
            //dispatch(loginUserSuccess(result.data))
            dispatch(loginUserSuccess(token, userId));

        }).catch(err => {
            dispatch(loginUserError(err))
        })



    }
}


export const loginUserStart = () => {
    return {
        type: "LOGIN_USER_START"
    }
}
export const loginUserSuccess = (token, userId) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        token,
        userId
    }
}
export const loginUserError = (error) => {
    return {
        type: "LOGIN_USER_ERROR",
        error
    }
}