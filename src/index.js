import React from 'react';
// import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from './useContext';
import myReducer from './reducers/index'
import rootSaga from './sagas/rootSaga';
import { createRoot } from 'react-dom/client';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: myReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
const rootDiv = createRoot(document.getElementById('my-react-app-root'));
store.subscribe(() => console.log("store state", store.getState()))
rootDiv.render(

  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);