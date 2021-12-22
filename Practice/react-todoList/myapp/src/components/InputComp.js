
import React, {Component} from 'react';
import "../css/InputComp.css";


class InputComp extends Component{
    constructor(props){
      super(props)
      this.state={
          todo:' '
      }
      
    }

   

    //ES6-Arrow Function
    addTodo=()=>{
        alert("추가!(Input)")
        const todo=this.state.todo

        if(todo==='' || todo===' '){
            alert("할일을 입력하세요!")
            return
        }
        this.props.addTodo(todo)
        //App가 props로 넘긴 addTodo메서드
        //App의 addTodo메서드
        document.getElementById("todo-input").value=''
        //clear input: 인풋 청소
    }
    handleChange=(e)=>{
        //이벤트 객체가 e에 들어옴
        this.setState({
            todo:e.target.value
        })

    }
    render(){
      
      return(
        <div id="inputComp">
            <input type="text" placeholder="할일입력" id="todo-input"
            onChange={this.handleChange}/>{/*인풋에 변화가일어나면 실행*/}
            <button onClick={this.addTodo}>추가</button>
        </div>
      )
    }

}

export default InputComp;
