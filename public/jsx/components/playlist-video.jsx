import React, { Component, PropTypes } from 'react';

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
        //console.log(this.props)
       // console.log("PLAYLIST VIDEO: ", this.state, this.props)
        var videoSelected = (this.props.currentPlay.id == this.props.id.videoId) ? 'text-success' : 'text-muted'

        return (
            <div className={videoSelected}>
                <li onClick={_this.setUserPlay.bind(_this, this.props)}>{this.props.snippet.title}</li>
            </div>
        )
    }
}