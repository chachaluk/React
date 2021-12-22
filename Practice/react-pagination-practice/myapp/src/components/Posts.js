import React,{Component} from 'react';
import "../css/Posts.css";
import Post from './Post';

class Posts extends Component{//컴포넌트기능이 app으로 들어감

  constructor(props){
      super(props)//컴포넌트 클래스의 생성자
      this.state={
        
      }
  }

  render(){
    const result=this.props.posts.map(
      (data)=>(<Post key={data.no} no={data.no} title={data.title}
         author={data.author} writeDate={data.writeDate}></Post>)
    )
    // this.props.posts에는 App로부터 넘겨받은 JSON배열을 map한다
    // map을 써서 컴포넌트 반복생성
    return(
      <div id="posts">
        <ul>
          {result}
        </ul>
      </div>
    );
  }
}


export default Posts;
