import React,{Component} from "react";
import '../css/Post.css';
class Post extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
        
        <div id="post">
            <span>{this.props.no}</span>
            <span>{this.props.title}</span>
            <span>{this.props.author}</span>
            <span>{this.props.writeDate}</span>
        </div>

        )
    }
}
export default Post;