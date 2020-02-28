import React, {Component} from 'react';
import './App.css';
import {postUrl} from "./store/actions/linksAction";
import {connect} from "react-redux";

class App extends Component {

  state = {
    url: ''
  };

  onChange = event => {
    this.setState({url: event.target.value});
  };

  postUrlHandler = () => {
    const url = {originalUrl: this.state.url};
    this.props.postUrl(url);
  };

  render() {
    let url;
    if (this.props.url){
      url = <a href={`http://localhost:8000/${this.props.url}`} target="_blank">
              {`http://localhost:8000/${this.props.url}`}
            </a>;
    } else {
      url = '';
    }

    return (
        <div className="App">
          <h1>Shorten your link!</h1>
          <input type="text" onChange={this.onChange} value={this.state.url}/>
          <button onClick={this.postUrlHandler}>Shorten</button>
          <p>Your link will be here</p>
          {url}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  url: state.shortUrl
});

const mapDispatchToProps = dispatch => ({
  postUrl: url => dispatch(postUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
