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
              <div className="panel panel-warning">
                  <div className="panel-heading">Select Artist</div>
                  <div className="panel-body">
                     <select onChange={this.setUserSelection.bind(this)}>
                       {artists}
                     </select>
                  </div>
              </div>
          )
      }
  }