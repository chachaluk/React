
import './App.css';
import React, {Component} from 'react';
import InputComp from './components/InputComp.js';
import Todo from './components/Todo.js';

class App extends Component{
    constructor(props){
      super(props)
      this.state={
        todoList:[
          {id:1,todo:'공부하기'},
          {id:2,todo:'운동하기'},
          {id:3,todo:'요리하기'},
        ],
        id:4
      }
    }

    delTodo=(id)=>{
      alert("삭제!(App)")
      alert("넘겨받은 삭제할 아이디:"+id)
      //filter: 어떤 원소를 통과시켜서 배열을 재배치
      const filterTodoList=this.state.todoList.filter(
        (data)=>(data.id !=id)
        //배열에서 받아온 데이터에서 데이터의 매개변수 id와 다른것만 통과시킴
        //삭제할 아이디와 일치하지 않는 원소만 통과시켜서 그 원소들로 배열을 새로 만든다
      )
      
      this.setState({
        todoList:filterTodoList
      })
      

    }

    addTodo=(todo)=>{
      alert("추가!(App)")
      alert("App가 받은 추가할 값:"+todo)
      //concat 사용해서 todoList JSON배열에 원소 추가
      var todoObj={id:this.state.id,todo:todo} //객체생성
      const concatTodoList=this.state.todoList.concat(todoObj) //데이터추가
      this.setState({
        todoList:concatTodoList
      })
      this.setState({
        id:this.state.id+1
      })
    }

    render(){

      const result=this.state.todoList.map(
        (data)=>(<Todo key={data.id} id={data.id} todo={data.todo} 
          delTodo={this.delTodo}></Todo>)//값 넘기기
      )
      
      return(
        <div id="app">
          <div id="title">ToDo List</div>
          <InputComp addTodo={this.addTodo}></InputComp> {/*app의 메서드인 addTodo를 inputComp로 넘김*/}
          {result}
        </div>
      )
    }

}

export default App;
