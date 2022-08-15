import React, {Component} from 'react'

import './App.scss'
import TitleBar from "./TitleBar";
import ContentBody from "./ContentBody";


/**
 * The Main entry point of the UI
 */
class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="container">
                <TitleBar />
                <ContentBody />
            </div>
        </div>
    );
  }
}

export default App;
