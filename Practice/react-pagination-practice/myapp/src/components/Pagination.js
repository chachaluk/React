import React,{Component} from 'react';
import "../css/Pagination.css";

class Pagination extends Component{//컴포넌트기능이 app으로 들어감

  constructor(props){
      super(props)//컴포넌트 클래스의 생성자
      this.state={

      }
  }
  pageClick=(page)=>{
    alert(page+"페이지 클릭!")
    this.props.setCurrentPage(page)
    //App가 넘겨준 setCurrentPage메서드 사용
  }

  prevPage=()=>{
    alert("이전페이지!(Pagination)")
    this.props.prevPage()
  }

  nextPage=()=>{
    alert("다음페이지!(Pagination)")
    this.props.nextPage()
  }

  toTheFront=()=>{
    alert("제일 앞으로!(pagination)")
    this.props.toTheFront()
  }

  toTheBack=()=>{
    alert("제일 뒤로!(pagination)")
    this.props.toTheBack()
  }

  render(){
    
    const totalPosts=this.props.totalPosts//총글개수(10)
    const postsPerPage=this.props.postsPerPage//페이지당 글 개수(3)
    let pageNumber=[]//빈 배열
    //10나누기3을 올림=3.3 올림하면 4
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)//빈 배열 push로 늘리기
    }
    //let pageNumber=[1,2,3,4]
    const pageList=pageNumber.map(                     //바로 실행안되고 페이지 클릭하면 실행
      (page)=>(<span className="page" id={"page"+page} onClick={()=>this.pageClick(page)}>
        {page}
      </span>)
    );
 


  
    return(
      <div id="pagination">
          <span className="pageBtn" onClick={this.toTheFront}>&laquo;</span>
          <span className="pageBtn" onClick={this.prevPage}>&lt;</span>
          {pageList}
          <span className="pageBtn" onClick={this.nextPage}>&gt;</span>
          <span className="pageBtn" onClick={this.toTheBack}>&raquo;</span>
      </div>
    );
  }
}


export default Pagination;
