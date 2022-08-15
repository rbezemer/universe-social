import React, {Component} from 'react'
import './UserPosts.scss'
import PostCard from "./PostCard";
import {Store} from "./model/store";
import {Link, useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

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

/**
 * This is very similar to the regular posts view,
 * I started just extending the Posts component, but in the interest of time
 * I just copied and modified
 * todo: extend and reuse regular posts lists and just swap out the model
 */
class UserPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            posts: []
        }
    }
    componentDidMount() {
        const { userId } = this.props.params
        Store.findAll('post', `user/${userId}/`, true).then((result) => {
            this.setState({
                posts: result,
            })
        });
        Store.find('user', userId).then((result) => {
            this.setState({
                user: result,
            })
        });

    }
    render() {
        const {posts, user} = this.state
        return (
            <div className="user-posts">
                <Link className="waves-effect waves-light btn" to="/">
                    <i className="material-icons left">chevron_left</i>Back</Link>
                <h5>Posts by {user.name} ( {user.username} ) : </h5>
                <PostList postData={posts}/>
            </div>

        );
    }
}

export default withParams(UserPosts)