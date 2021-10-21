import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink, BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <div>
    <BrowserRouter>
      <nav className="nav"> 
      <NavLink className='link' exact to="/" activeStyle={{backgroundColor: '#dedcee'}}>Расчет</NavLink>  
      <NavLink className='link' to="/graph" activeStyle={{backgroundColor: '#dedcee'}}>График функции</NavLink>  
      <NavLink className='link' to="/about" activeStyle={{backgroundColor: '#dedcee'}}>Описание метода</NavLink>
      </nav>    
    <App/>
    </BrowserRouter>
    <p style = {{position: 'absolute', bottom: '15px', right: '15px',  backgroundColor:'#dedcee',border: '2px solid #6a60a9', color: "blue "}}>Разработчик: Цветкова Д.В.</p>
  </div>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
