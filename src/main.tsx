import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'

import {createStore} from "redux";
import indexReducer  from './reducers/index.reducer';
import { Provider } from 'react-redux';
const store = createStore(indexReducer);

const ENABLE_STRICT_MODE = import.meta.env['ENABLE_STRICT_MODE'] || false;

const AppComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

createRoot(document.getElementById('root')!).render(
  ENABLE_STRICT_MODE ? <StrictMode>{AppComponent}</StrictMode> : AppComponent
);
