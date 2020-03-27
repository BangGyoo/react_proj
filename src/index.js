import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter , Route } from 'react-router-dom';
import TechIntroduce from './TechIntroduce';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/main' component={Main}/>
    <Route path='/TechIntroduce/:name' component={TechIntroduce}/>
  </BrowserRouter>
    ,
  document.getElementById('root')
);
