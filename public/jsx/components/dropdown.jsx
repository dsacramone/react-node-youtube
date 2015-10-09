import React, { Component, PropTypes } from 'react';

export default class DropDown extends React.Component {
      constructor(props) {
          super(props)
      }

      setUserSelection(artist) {
         this.props.onSelectionChange(artist.target.value);
      }

      render() {
          var _this = this;
          var artists = this.props.userArtists.map((artist, k) => <option value={artist} key={k}>{artist}</option>);

          return (
              <div className="panel panel-warning text-center">
                  <div className="panel-heading">
                  <span className="h4">Select Artist</span></div>
                  <div className="panel-body">
                     <select value={this.props.query} className="form-control" onChange={this.setUserSelection.bind(this)}>
                       {artists}
                     </select>
                  </div>
              </div>
          )
      }
  }