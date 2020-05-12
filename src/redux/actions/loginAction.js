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
            dispatch(loginUserSuccess(result.data))

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
export const loginUserSuccess = (data) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        data
    }
}
export const loginUserError = (error) => {
    return {
        type: "LOGIN_USER_ERROR",
        error
    }
}