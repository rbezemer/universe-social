import React, {Component} from 'react'
import './AppMenu.scss'
import {Link} from "react-router-dom";

class AppMenu extends Component {
    render() {
        return (
            <ul className="AppMenu collection">
                <li className="collection-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="collection-item">
                    <Link to="/profile/1">Profile</Link>
                </li>
            </ul>
        );
    }
}

export default AppMenu;