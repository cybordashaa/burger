import React, { useState } from 'react';
import axios from 'axios';


const UserContext = React.createContext();

const initialState = {
    saving: false,
    logginIn: false,
    error: null,
    errorCode: null,
    token: null,
    userId: null
};


export const UserStore = (props) => {

    const [state, setState] = useState(initialState);

    const loginUserSuccess = (token, userId, expireDate, refreshToken) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);
        setState({
            ...state,
            logginIn: false,
            error: null,
            errorCode: null,
            token,
            userId
        })
    }

    const loginUser = (email, password) => {


        setState({
            ...state,
            logginIn: true
        });


        const data = {
            email,
            password,
            returnSecureToken: true
        }
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

            loginUserSuccess(token, userId, expireDate, refreshToken);
            //dispatch(actions.autoLoginAfterMillisec(expiresIn * 1000))


        }).catch(err => {
            setState({
                ...state,
                logginIn: false,
                error: err.message,
                errorCode: err.code,
                token: null,
                userId: null

            })
        })



    }

    const signupUser = (email, password) => {

        setState({ ...state, saving: true });

        const data = {
            email,
            password,
            returnSecureToken: true,
        };
        axios
            .post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo",
                data
            )
            .then(result => {
                // LocalStorage ruu hadgalna
                const token = result.data.idToken;
                const userId = result.data.localId;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);

                setState({ ...state, saving: false, token, userId, error: null, errorCode: null });
            })
            .catch(err => {
                setState({
                    ...state,
                    saving: false,
                    token: null,
                    userId: null,
                    error: err.message,
                    errorCode: err.code,
                })
            });
    }

    // token hichungv bolohd refresh toke ilgeej token awah function
    const autoRenewTokenAfterMillisec = ms => {

        axios.post('https://securetoken.googleapis.com/v1/token?key=AIzaSyBivztEBPPk9QA1oFhMGfW06SFoLMeZ1fo',
            {
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem('refreshToken')
            }
        ).then((result) => {
            const token = result.data.id_token;
            const userId = result.data.user_id;
            const expiresIn = result.data.expires_in;
            const expiresDate = new Date(new Date().getTime() + expiresIn * 1000);
            const refreshToken = result.data.refresh_token;
            loginUserSuccess(token, userId, expiresDate, refreshToken);

        }).catch((err) => {
            setState({
                ...state,
                logginIn: false,
                error: err.message,
                errorCode: err.code,
                token: null,
                userId: null

            })

        });

        setTimeout(() => {
            autoRenewTokenAfterMillisec(3600 * 1000);
        }, ms)

    }



    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expireDate");
        localStorage.removeItem("refreshToken");
        setState({
            initialState
        })
    };

    return (
        <UserContext.Provider value={{ state, signupUser, loginUser, logout, loginUserSuccess, autoRenewTokenAfterMillisec }}>
            {props.children}
        </UserContext.Provider>
    );
}


export default UserContext;
