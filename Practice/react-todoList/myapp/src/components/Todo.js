import React, {Component} from 'react';
import "../css/Todo.css";


class Todo extends Component{
    constructor(props){
      super(props)
     
    }
    
    delTodo=()=>{
      alert("삭제!(Todo)")
      const id=this.props.id
      this.props.delTodo(id)
      //App가 넘겨준 delTodo메서드
    }

    render(){
      
      return(
        <div id="todo">
            <div>
                할일: {this.props.todo}
                <button id="delBtn" onClick={this.delTodo}>삭제</button>
            </div>
        </div>
      )
    }

}

export default Todo;
