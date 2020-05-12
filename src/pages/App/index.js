import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom';
import css from "./style.module.css";
import { connect } from 'react-redux';
import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from 'react-router-dom';
import ShippingPage from "../ShippingPage";
import Login from "../Login";
import Signup from "../signUpPage";
import Logout from "../../components/logout";
import * as actions from '../../redux/actions/loginAction';

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token) {

      this.props.autoLogin(token, userId);

    }

  }
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          UserId : {this.props.userId}
          {this.props.userId ? (<Fragment>
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

        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
