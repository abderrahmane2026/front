import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Shopcontextprovider from './Context/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Shopcontextprovider>
        <App />
      </Shopcontextprovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);