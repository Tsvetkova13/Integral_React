import { Component } from "react";
import AnswerItem from './AnswerItem.js';

class Calculate extends Component{
    constructor (props){
        super(props);
    
        //console.log("constructor");
        this.state={
          AnswerList:[]
          
        }
        this.onAChange = this.onAChange.bind(this);
        this.onBChange = this.onBChange.bind(this);
        this.onNChange = this.onNChange.bind(this);
        this.deleteAllHandler=this.deleteAllHandler.bind(this);
        this.calculateHandler=this.calculateHandler.bind(this);
      }
    
      deleteHandler(index){
        let answerList = this.state.AnswerList;
        answerList.splice(index,1);
        this.setState({AnswerList:answerList});
      }
    
      deleteAllHandler()
      {
        const answerListNew=[]
        this.setState({AnswerList:answerListNew})
      }
    
      onAChange(e) {
        var val = e.target.value;
        this.setState({a: val });
      }
    
      onBChange(e) {
        var val = e.target.value;
        this.setState({b: val });
      }
    
      onNChange(e) {
        var val = e.target.value;
        this.setState({N: val });
      }
    
       f(x){
        let res;
        //res=3*x;
        res=Math.pow(2,3*x);
        console.log("x func="+x);
        console.log("res="+res);
        return res;
      }
    
      calculateHandler=()=>{
        
        let currentList=this.state.AnswerList;
        let a=this.state.a;
        console.log("a="+a);
        let b=this.state.b;
        console.log("b="+b);
        let N=this.state.N; 
        console.log("N="+N);
        let h=(b-a)/N;
        console.log("H="+h);
        let s=0;
        console.log("s0="+s);
        var x=a;
        console.log("x0="+x);
        let i=0;
        for(i=0;i<N-1;i++){
          
          s+=+h*this.f(+x+ +i* +h- +0.5* +h);
          console.log("s="+s);
          x=+x+ +h;
          console.log("x[i]="+x);
        }
        
        currentList.push({answer:s});
        
        this.setState({AnswerList:currentList})
      }

    render (){
        let test = this.state.AnswerList.map((ans,index)=>{
            if(index===0)
            return(<AnswerItem answer = {ans.answer} color = "green" onDelete = {this.deleteHandler.bind(this, index)}/>);
            return(<AnswerItem answer = {ans.answer} color = "blue" onDelete = {this.deleteHandler.bind(this, index)}/>);
        
          });
      
        return( 
            <div className="settings" >
            {/* style={{backgroundImage: "url(images/cats.jpg)"}} */}
                <h1 className="header">Рассчёт интеграла</h1>
                <p>a</p><input type = "text" onChange={this.onAChange}></input>
                <p>b</p><input type = "text" onChange={this.onBChange}></input>
                <p>N</p><input type = "text" onChange={this.onNChange}></input>
                 <br/>
                 <button onClick = {this.calculateHandler}> Вычислить</button>
                 <button onClick ={this.deleteAllHandler}> Очистить</button>
                { test }
            </div>

        );
    }
}
export default Calculate;