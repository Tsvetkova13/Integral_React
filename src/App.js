import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import AnswerItem from './Item/AnswerItem.js';
import ClickButton from './Item/ClickButton.js';
import { Component } from 'react';
import Calculate from './Item/Calculate';
import About from './Item/About';
import Graph from './Item/Graph';



class App extends Component{
  render(){
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Calculate}/>
          <Route  path="/about" component={About}/>
          <Route  path="/graph" component={Graph}/>
        </Switch>
      </div>
    
     
  );
  }

}



export default App;
