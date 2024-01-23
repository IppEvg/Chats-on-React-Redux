import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CircularProgress } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { reducerLogin } from './store/LoginReducer/reducerLogin';
import { reducerMessages } from './store/MessageReducer/reducerMessages';

import './index.css';

const persistConfig = {
  key: 'root',
  storage,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({ reducerLogin, reducerMessages })
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
