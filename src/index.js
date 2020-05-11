import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from './redux/reducer/orderReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      console.log("My logger middleware: Dispatching ==> ", action);
      console.log("My logger middleware: State before", store.getState());

      const result = next(action);
      console.log("My LoggerMiddleWare: State AFTER : ", store.getState());

      return result;
    }
  }
}

const reducers = combineReducers({
  burgerReducer,
  orderReducer
});

const middlewares = [
  thunk,
  logger
]
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter ><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
