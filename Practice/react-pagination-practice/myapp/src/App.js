
import './App.css'; 
import React,{Component} from 'react';
import Posts from './components/Posts.js';
import Pagination from './components/Pagination.js';
import "../src/css/Title.css";

//props(properties 속성): 상위 컴포넌트가 하위 컴포넌트에 넘겨주는 값, 컴포넌트에 주입시키는 값
//state: 클래스형 컴포넌트가 가지는 상태값, 함수형 컴포넌트는 state를 못가짐

//함수형 컴포넌트: 가볍다, state가 없다, life cycle을 사용하지 못한다
//클래스형 컴포넌트: 무겁다, state가 있다, life cycle을 사용할 수 있다, render을 써야한다(life cycle함수의 일종)
class App extends Component{//컴포넌트기능이 app으로 들어감

  constructor(props){
      super(props)//컴포넌트 클래스의 생성자
      this.state={
        posts: [//글 목록이 들어있는 길이가 10인 json배열, 궁극적으로는 db데이터를 연동해서 사용
          {no:10,title:'title10', author:"kim",writeDate:"2020-12-01"},
          {no:9,title:'title9', author:"lee",writeDate:"2020-11-01"},
          {no:8,title:'title8', author:"park",writeDate:"2020-10-01"},
          {no:7,title:'title7', author:"choi",writeDate:"2020-9-01"},
          {no:6,title:'title6', author:"jeong",writeDate:"2020-8-01"},
          {no:5,title:'title5', author:"sin",writeDate:"2020-7-01"},
          {no:4,title:'title4', author:"kwon",writeDate:"2020-6-01"},
          {no:3,title:'title3', author:"kang",writeDate:"2020-5-01"},
          {no:2,title:'title2', author:"jin",writeDate:"2020-4-01"},
          {no:1,title:'title1', author:"bae",writeDate:"2020-3-01"},
      ],
      currentPage:1, //현재 페이지
      postsPerPage:3 //페이지당 글 3개
      }
  }
  setCurrentPage=(page)=>{//페이지 변경 메서드
    alert("페이지변경!(App)")
    this.setState({
      currentPage:page
    })
  }
  currentPosts=(totalPosts)=>{//페이지에 따른 posts를 나타내는 함수
    //1페이지다: 10,9,8
    //2페이지다: 7,6,5

    const currentPage=this.state.currentPage
    const postsPerPage=this.state.postsPerPage

    const indexOfLast=currentPage*postsPerPage
    const indexOfFirst=indexOfLast-postsPerPage
    //1페이지 3-0 -> slice(0,3): 0,1,2 추출
    //2페이지 6,3 -> slice(3,6): 3,4,5 추출
    //3페이지 9,6 -> slice(6,9): 6,7,8 추출
    //4페이지 12,9 -> slice(9,12): 9,10,11이 추출되어야하는데 9까지만 있음 - 배열범위초과
    //4페이지 12,9 -> slice(9,12): 9,X,X

    const slicePosts=totalPosts.slice(indexOfFirst,indexOfLast)
    //slice(start,end)-시작부터 끝까지 일부분 추출

    return slicePosts;
  }

  prevPage=()=>{
    alert("이전페이지!(App)")
    const currentPage=this.state.currentPage
    if(currentPage===1){
      alert("이동불가!")
    }else{
      this.setState({
        currentPage:currentPage-1
      })
    }
    
  }
  nextPage=()=>{
    alert("다음페이지!(App)")

    const totalLength=this.state.posts.length
    const postsPerPage=this.state.postsPerPage
    const lastPage=Math.ceil(totalLength/postsPerPage)

    const currentPage=this.state.currentPage
    if(currentPage===lastPage){
      alert("이동불가!")
    }else{
      this.setState({
        currentPage:currentPage+1
      })
    }
  }
  
  toTheFront=()=>{
    alert("제일 앞으로!(App)")
    
    this.setState({
      currentPage:1
    })
  }

  toTheBack=()=>{
    alert("제일 뒤로!(App)")
    const totalLength=this.state.posts.length
    const postsPerPage=this.state.postsPerPage
    const lastPage=Math.ceil(totalLength/postsPerPage)
    this.setState({
      currentPage:lastPage
    })
  }

  render(){
    return(
      <div id="app">
        <h1 id="title">제목</h1>
        
        {/* 상위 app가 하위컴포넌트에 메서드를 넘겨서 자기 메서드를 사용하게 할 때는 props */}
        <Posts posts={this.currentPosts(this.state.posts)}></Posts>

        {/*메서드넘겨서 하위 컴포넌트가 값 변경 가능하게하기*/}
        <Pagination postsPerPage={this.state.postsPerPage} 
        totalPosts={this.state.posts.length} //데이터 넘기기
        setCurrentPage={this.setCurrentPage}
        prevPage={this.prevPage}
        nextPage={this.nextPage}
        toTheFront={this.toTheFront}
        toTheBack={this.toTheBack}> 
        </Pagination> 
      </div>
    );
  }
}


export default App;
