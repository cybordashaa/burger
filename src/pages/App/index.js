import React from 'react';
import appStyles from './app.module.css';
import Toolbar from '../../components/ToolBar';
import BurgerPage from '../BurgerPage';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={appStyles.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
