import React, {Component} from 'react'
import './Posts.scss'
import PostCard from "./PostCard";
import {Store} from "./model/store";

const PostList = (props) => {
    let posts = [];
    props.postData.forEach((post, index) => {
        posts.push(
            <PostCard key={index} className="Post" contentData={post}/>
        );
    });
    return (
        <div className="Posts">
            { posts }
        </div>
    );
}

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        Store.findAll('post', '', true).then((result) => {
            this.setState({
                posts: result,
            })
        })
    }

    render() {
        const {posts} = this.state
        return (
            <PostList postData={posts}/>
        );
    }
}

export default Posts;
