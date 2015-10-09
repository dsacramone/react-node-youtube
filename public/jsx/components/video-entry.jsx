import React, { Component, PropTypes } from 'react';
import _ from 'lodash'

import PlayList from './playlist.jsx';
import DropDown from './dropdown.jsx';
import Video from './video.jsx';

// Initialize socket.io
const socket = io.connect();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectionChange = this.onSelectionChange.bind(this)
        this.onPlayListChange = this.onPlayListChange.bind(this)

        this.state = {
            userArtists: [],
            searchSelection: '',
            videos: {items:[]},
            query: '',
            currentPlay: {id:'', title:'', description:'', image: '', searchSelection: ''}
        }
    }

    componentWillMount() {
        socket.on('videoRequest', data => {
            this.setVideoStates(JSON.parse(data));
        })
        .on('userArtists', data => {
             this.setUserArtistsStates(data);
        })
    }

    onSelectionChange(searchSelection) {
        this.setState({
            searchSelection: searchSelection
        });
        socket.emit('selectArtist',searchSelection);
    }

    onPlayListChange(currentPlay) {
        this.setState({
            currentPlay: {
               id:  currentPlay.id.videoId,
               title: currentPlay.snippet.title,
               description: currentPlay.snippet.description,
               image: currentPlay.snippet.thumbnails.default.url || '',
               searchSelection: this.state.searchSelection
            }

        });
    }

    setVideoStates(videos) {
        this.setState({
            videos: videos,
            query: videos.q || ''
        });
        this.onPlayListChange(_.first(videos.items));
    }

    setUserArtistsStates(artists) {
        this.setState({
            userArtists: artists
        });
    }
    render() {

        return (
            <div>
                <div>
                    <div className="row">
                      <div className="col-md-12">
                         <DropDown onSelectionChange={this.onSelectionChange} {...this.state} />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"><PlayList onPlayListChange={this.onPlayListChange} {...this.state} /></div>
                        <div className="col-md-6"><Video {...this.state} /></div>
                    </div>
                </div>
            </div>
        )
    }
}