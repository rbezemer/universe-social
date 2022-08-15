import React, {Component} from 'react'
import './ContentBody.scss'
import AppMenu from "./AppMenu";
import Posts from "./Posts";
import {Routes, Route} from "react-router-dom";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";

const Home = () => {
    return (
        <Posts />
    )
}

const ShowPostDetails = () => {
    return (
        <PostDetails />
    )
}
/**
 * As of right now the profile page is a work in progress
 * todo: add profile component
 * @returns {JSX.Element}
 * @constructor
 */
const ShowProfile = () => {
    return (
        <UserPosts />
    )
}

/**
 * The core viewing area that updates as the url path changes.
 * different content wil display here depending on what route you are on.
 */
class ContentBody extends Component {
    render() {
        return (
            <div className="ContentBody row">
                <div className="col s2">
                    <AppMenu />
                </div>
                <div className="col s10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:postId" element={<ShowPostDetails />} />
                        <Route path="/profile/:userId" element={<ShowProfile />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default ContentBody;