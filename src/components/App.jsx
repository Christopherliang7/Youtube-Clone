import exampleVideoData from "/src/data/exampleVideoData.js";
import VideoList from "/compiled/src/components/VideoList.js";
import VideoListEntry from "/compiled/src/components/VideoListEntry.js";
import VideoPlayer from "/compiled/src/components/VideoPlayer.js";
import Search from "/compiled/src/components/Search.js";
import searchYouTube from "/src/lib/searchYouTube.js";
import YOUTUBE_API_KEY from "/src/config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0]
    };
    this.updateVideo = this.updateVideo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  updateVideo(newVideo) {
    //console.log(event);
    //console.log(this);
    this.setState({'currentVideo':newVideo});
  }

  updateState(data) {
    this.setState({
      videos: data,
      currentVideo: data[0]
    });
  }

  onFormSubmit(query) {
    this.props.searchYouTube({'key':YOUTUBE_API_KEY, 'query':query, 'max':5}, this.updateState);
  }

  componentDidMount() {
    this.props.searchYouTube({'key':YOUTUBE_API_KEY, 'query':'basketball', 'max':5}, this.updateState);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onFormSubmit={this.onFormSubmit} />
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/*<div><h5><em>videoPlayer</em> view goes here</h5></div>*/}
            <VideoPlayer video= {this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}

            <VideoList videos = {this.state.videos} onTitleClick = {this.updateVideo}   />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
