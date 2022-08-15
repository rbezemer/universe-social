import React, {Component} from 'react'
import './TitleBar.scss'
import {Link} from "react-router-dom";

class TitleBar extends Component {
    render() {
        return (
            <nav className="TitleBar">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Universe Social</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://onuniverse.com">Universe</a></li>
                        <li><a href="https://softwarebyrichard.com">Blog</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default TitleBar;