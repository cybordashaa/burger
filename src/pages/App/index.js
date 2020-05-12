import React, { Component } from "react";
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

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSidebar: !prevState.showSidebar };
    });
  };


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

          <Switch>
            <Route path="/signUp" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route
              path='/' component={BurgerPage}
            />
            {/* <Route path="/" component={BurgerPage} /> */}
          </Switch>
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
export default connect(mapStateToProps)(App);
