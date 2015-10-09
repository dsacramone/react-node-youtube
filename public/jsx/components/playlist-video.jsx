import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


export default class PlayListVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    setUserPlay(video) {
        this.props.onPlayListChange(video);
    }

    componentDidMount() {
        if(this.props.defaultPlay){
            this.setUserPlay(this.props);
        }
    }

    componentDidUpdate() {
        if(this.props.defaultPlay && this.props.currentPlay.searchSelection !== this.props.searchSelection) {
            this.setUserPlay(this.props);
        }
    }

    render() {
        var _this = this;
        var bool  = this.props.currentPlay.id == this.props.id.videoId;
        var videoSelected = classNames({
              'text-success' : bool,
              'text-muted' : !bool,
              'table-bordered': bool
            });

        var liClass = classNames({
               'glyphicon': bool,
               'glyphicon-ok': bool
             })

        var cursorStyle = {
              cursor: "pointer",
        }

        return (
            <div className={videoSelected}>
                <li className={liClass} style={cursorStyle} onClick={_this.setUserPlay.bind(_this, this.props)}> {this.props.snippet.title}</li>
            </div>
        )
    }
}