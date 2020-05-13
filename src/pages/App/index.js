import React, { Fragment, useState, useEffect, Suspense } from "react";
import { Redirect } from 'react-router-dom';
import css from "./style.module.css";
import { connect } from 'react-redux';
import Toolbar from "../../components/ToolBar";
import SideBar from "../../components/SideBar";
import { Route, Switch } from 'react-router-dom';
import ShippingPage from "../ShippingPage";
import Login from "../Login";
import Logout from "../../components/logout";
import * as actions from '../../redux/actions/loginAction';
import * as logout from '../../redux/actions/signupActions';


// import BurgerPage from "../BurgerPage";
// import OrderPage from "../OrderPage";
// import Signup from "../signUpPage";


const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});
const OrderPage = React.lazy(() => {
  return import("../OrderPage");
})
const Signup = React.lazy(() => {
  return import("../signUpPage");
})


const App = props => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar(prevShowSidebar => !prevShowSidebar);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expireDate = new Date(localStorage.getItem('expireDate'));
    if (token) {
      if (expireDate > new Date(new Date().getTime())) {
        // token time duusaagv ued, login hiine
        props.autoLogin(token, userId);
        // token huchingui bolohod uldej baigaa hugatsaag tootsoolj 
        // ter hugatsaanii daraa automataar lgout hiine 
        props.autoLoginAfterMillisec(expireDate.getTime() - new Date(new Date().getTime()))
      } else {

        // token time duussan ued lgout hiine
        props.logout();

      }
    }

  }, [props]);
  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />

      <SideBar
        showSidebar={showSidebar}
        toggleSideBar={toggleSideBar}
      />

      <main className={css.Content}>
        <Suspense fallback={<div>Loading ....</div>}>
          UserId : {props.userId}
          {props.userId ? (<Fragment>
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route
                path='/' component={BurgerPage}
              /></Switch>
          </Fragment>) : (<Fragment><Switch>
            <Route path="/signUp" component={Signup} />
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
            {/* <Route path="/" component={BurgerPage} /> */}
          </Switch></Fragment>)}
        </Suspense>

      </main>
    </div>
  );

}
const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(logout.logout()),
    autoLoginAfterMillisec: (ms) => dispatch(logout.autoLoginAfterMillisec(ms))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
