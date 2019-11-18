import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './containers/dashboard/Dashboard'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/app.scss"

render((
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  ), document.getElementById('root'));