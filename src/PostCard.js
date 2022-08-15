import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './PostCard.scss'
import {Store} from "./model/store";

const CardTitle = (props) => {
    const { titleData, userData } = props
    return (
        <div className="card-title">
            <h5 data-testid="post-title">{titleData}</h5>
            <div className="username">
                <i className="material-icons left ">account_circle</i>
                <span data-testid="post-username">{userData.username}</span>
            </div>
        </div>
    );
}
const CardContent = (props) => {
    const {contentData} = props
    return (
        <p data-testid="post-content">{contentData}</p>
    );
}
const CardMenu = (props) => {
    const postPath = `/post/${props.postId}`;
    const profilePath = `/profile/${props.userId}`;
    return (
        <div className="card-action">
            <Link className="waves-effect waves-light btn" to={postPath} data-testid="post-comments-btn">
                <i className="material-icons left">chat</i>Comments</Link>
            <Link className="waves-effect waves-light btn" to={profilePath} data-testid="post-profile-btn">
                <i className="material-icons left">account_circle</i>User Profile</Link>
        </div>
    )
}

/**
 * The basic view of post content, in Card form
 */
class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    /**
     * Load in the user data when the post changes
     */
    componentDidUpdate(prevProps) {
        const {contentData} = this.props;
        if (contentData.userId) {
            Store.find('user', contentData.userId).then((result) => {
                this.setState({
                    user: result,
                })
            });
        }
    }
    render() {
        const {contentData} = this.props
        const {user} = this.state
        return (
            <div className="ContentCard row">
                <div className="col s12 m8">
                    <div className="card">
                        <div className="card-content ">
                            <CardTitle titleData={contentData.title} userData={user} />
                            <CardContent contentData={contentData.body}/>
                        </div>
                        <CardMenu postId={contentData.id} userId={user.id}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostCard;