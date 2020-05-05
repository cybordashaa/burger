import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";

class App extends Component {
  state = {
    showSidebar: false
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
          <BurgerPage />
        </main>
      </div>
    );
  }
}

export default App;
