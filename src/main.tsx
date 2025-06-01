import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import {createStore} from "redux";
import indexReducer  from './reducers/index.reducer.js';
import { Provider } from 'react-redux';
const store = createStore(indexReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
