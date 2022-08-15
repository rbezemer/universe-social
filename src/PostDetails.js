import React, {Component} from 'react'
import {Link, useParams} from "react-router-dom";
import './PostDetails.scss'
import PostCard from "./PostCard";
import CommentCard from "./CommentCard";
import {Store} from "./model/store";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

const CommentsList = (props) => {
    let comments = [];
    props.commentData.forEach((item, index) => {
        comments.push (
            <CommentCard key={index} contentData={item}/>
        );
    });
    return (
        <div className="post-comments">
            { comments }
        </div>
    );
}

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            comments: []
        }
    }

    /**
     * Load in the post data
     * todo: this could really make use of a ORM and cache the data in a global state
     * as this data could be used multiple times in the application
     */
    componentDidMount() {
        const { postId } = this.props.params

        Store.find('post', postId).then((result) => {
            this.setState({
                post: result,
            })
        })
        /**
         * need to disable the cache here because otherwise won't get new comments
         * todo: fix cache for relationships
         */
        Store.findAll('comment', `posts/${postId}/`, true).then((result) => {
            this.setState({
                comments: result,
            })
        })


    }
    render() {
        const {post, comments} = this.state
        return (
            <div className="post-details">
                <Link className="waves-effect waves-light btn" to="/">
                    <i className="material-icons left">chevron_left</i>Back</Link>
                <PostCard contentData={post} />
                <div className="row">
                    <div className="col s12">
                        <h4>Comments : </h4>
                    </div>
                    <div className="col s11 offset-s1">
                        <CommentsList commentData={comments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withParams(PostDetails);