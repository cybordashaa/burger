import axios from 'axios';
import * as actions from './signupActions';

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
            const expiresIn = result.data.expiresIn;
            // yg odoo login hiigdsenee hoish 3600 s-iin daraa ymr ognoo uuseh we teriig bdoh
            // 3600 sekundiin draah ognoo
            const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
            const refreshToken = result.data.refreshToken;

            localStorage.setItem('token', token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("expireDate", expireDate);
            localStorage.setItem("refreshToken", refreshToken);
            //dispatch(loginUserSuccess(result.data))
            dispatch(loginUserSuccess(token, userId));
            dispatch(actions.autoLoginAfterMillisec(expiresIn * 1000))


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
export const loginUserSuccess = (token, userId, refreshToken) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        token,
        userId,
        refreshToken
    }
}
export const loginUserError = (error) => {
    return {
        type: "LOGIN_USER_ERROR",
        error
    }
}