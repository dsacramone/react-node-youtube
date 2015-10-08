

var config = {
      port: 9002,
      artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong'],
      video: {
          key: 'AIzaSyDkSikSX-uWbxXyfanxQgsfjoj2pdyqQM0',
          part: "snippet",
          type: "video",
          q: 'Elton John',
          maxResults: 15,
          order: 'viewCount'
      }
};

module.exports = config;