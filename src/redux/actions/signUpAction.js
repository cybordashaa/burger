import axios from 'axios';

export const signupUser = (email, password) => {

    const data = {
        email,
        password,
        returnSecureToken: true
    }
    return function (dispatch) {
        dispatch(signupUserStart());
        //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo', data).then(result => {
            dispatch(signupUserSuccess(result.data))

        }).catch(err => {
            dispatch(signupUserError(err))
        })



    }
}


export const signupUserStart = () => {
    return {
        type: "SIGN_USER_START"
    }
}
export const signupUserSuccess = (data) => {
    return {
        type: "SIGN_USER_SUCCESS",
        data
    }
}
export const signupUserError = (error) => {
    return {
        type: "SIGN_USER_ERROR",
        error
    }
}