import React, {Component} from 'react'

class ClickButton extends React.Component {
             
    constructor(props) {
        super(props);
        this.state = {
            label: "Нажми"
        };
          
        this.press = this.press.bind(this);
    }
    press(props){
        let labelText = "Нажал";
         //this.state = {label: labelText};
        this.setState({
            label: labelText,
        });
    }
    render() {
        return <button onClick={this.press} >{this.state.label} </button>;
    }
}
  

export default ClickButton;