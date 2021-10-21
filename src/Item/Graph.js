import { Component } from "react";
import g from '../g.png';

class Graph extends Component{
    render(){
      return (<div className="graphTXT">
      <h1>График подынтегральной функции</h1>
      <br/>
      <img className="graphic" src={g}/>
      
      </div> );
      
    }
  }
  export default Graph;