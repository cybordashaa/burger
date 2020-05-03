import React from 'react';
import './style.css';
import Toolbar from '../../components/ToolBar';
import { BurgerBuilder} from '../../pages/BurgerBuilder';

function App() {
  return (
    <div className="App">

      <Toolbar/>
      <BurgerBuilder/>
    </div>
  );
}

export default App;
