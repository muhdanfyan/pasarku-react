import React from 'react'
import ReactDOM from 'react-dom'
// import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);