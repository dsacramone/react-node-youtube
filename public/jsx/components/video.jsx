import React, { Component, PropTypes } from 'react';

export default class Video extends React.Component {
      constructor(props) {
        super(props)
      }

      render() {
          var url = `http://www.youtube.com/v/${this.props.currentPlay.id}`;

          return (

              <div className="panel panel-warning text-center">
                  <div className="panel-heading h4">
                      {this.props.currentPlay.title}
                      { this.props.currentPlay.description
                         ?  <div className="panel panel-default">
                               <div className="panel-body" role="alert"
                                    dangerouslySetInnerHTML={{__html: this.props.currentPlay.description}} />
                            </div>
                         :''
                      }
                  </div>
                <iframe width="425" height="350" src={url} frameBorder="0"></iframe>

            </div>

        )
    }

}

