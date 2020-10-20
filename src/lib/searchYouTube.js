import YOUTUBE_API_KEY from '/src/config/youtube.js';

var youtubeURL = 'https://www.googleapis.com/youtube/v3/search';



var searchYouTube = (options, callback, errorCB=null) => {
  // TODO
  $.ajax({
    url: youtubeURL,
    type: "GET",
    data: {
      part: 'snippet',
      q: options['query'],
      maxResults: options['max'],
      key: options['key'],
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: "application/json",
    success: function (data) {
      callback(data.items);
    },
    error: errorCB || function (error) {console.error("youtubeFailure: failed to send message", error); }
  });
};

export default searchYouTube;
