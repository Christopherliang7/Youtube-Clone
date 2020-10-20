class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
  }

  handleInput(event) {
    this.setState({entry: event.target.value});
    event.preventDefault();
    this.props.onFormSubmit(this.state.entry);
  }

  handleDefault(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.entry);
  }

  render() {
    return (

      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleInput} />
        <button className="btn hidden-sm-down" onClick={this.handleDefault}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

/*
var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);
*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
