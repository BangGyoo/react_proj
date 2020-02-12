import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter , Route } from 'react-router-dom';
import TechIntroduce from './TechIntroduce';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/main' component={App}/>
    <Route path='/TechIntroduce/:name' component={TechIntroduce}/>
  </BrowserRouter>
    ,
  document.getElementById('root')
);
