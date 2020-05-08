import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from 'react-router-dom';
import { ShippingPage } from "../ShippingPage";

class App extends Component {
  state = {
    showSidebar: false,
    favorite: 'N/A'
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  choose = (orts) => {
    this.setState({
      favorite: orts
    })
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
          <p>Choose orts: {this.state.favorite}</p>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route
              path='/'
              render={(props) => <BurgerPage choose={this.choose} />}
            />
            {/* <Route path="/" component={BurgerPage} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
