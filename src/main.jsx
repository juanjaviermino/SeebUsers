import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeflex/primeflex.css';                                  
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/primereact.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </PrimeReactProvider>
)
