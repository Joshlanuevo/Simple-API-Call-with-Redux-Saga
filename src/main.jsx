import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import myFirstReducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { 
    myFirstReducer
  }, 
  middleware: [sagaMiddleware], 
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// const store = createStore(
//   allReducers, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
