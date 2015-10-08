import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import VideoEntry from './video-entry.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
              <VideoEntry />
            </div>
        )
    }
}
var elem = document.getElementById('app');

if(elem) {
    ReactDOM.render(<App />, elem);
}