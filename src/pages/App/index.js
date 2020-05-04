import React from 'react';
import appStyles from './app.module.css';
import Toolbar from '../../components/ToolBar';
import { BurgerBuilder } from '../../pages/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={appStyles.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
