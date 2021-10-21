import { Component } from "react";
class AnswerItem extends Component{
    
    render (){
        return( <div>
            <font color={this.props.color}> Answer: </font>
            <p> {this.props.answer}</p>

            <button onClick={this.props.onDelete}>X</button>
        </div>
        );
    }
}
export default AnswerItem;