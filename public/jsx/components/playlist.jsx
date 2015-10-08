import React, { Component, PropTypes } from 'react';
import PlayListVideo from './playlist-video.jsx'

export default class PlayList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var videoPlayList = this.props.videos['items'].map((video, k) => {
              var defaultPlay = {
                    defaultPlay: k === 0 ? true : false
              }

              return <PlayListVideo key={k} onPlayListChange={this.props.onPlayListChange} {...this.props} {...defaultPlay} {...video} />
        });

        return (
            <div className="panel panel-warning">
              <div className="panel-heading">Select Artist Video From Play List Below</div>
                <div className="panel-body">
                  <ul>
                    {videoPlayList}
                  </ul>
                </div>
           </div>
      )
    }
  }
