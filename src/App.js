import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseText);
        // this.setState({
        //   items: xhr.responseText.items
        // });
        // debugger
      }
    };

    xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items?key=1c6ebe8e60761812d139c06197b0b71e", true);
    xhr.send(null);
    // debugger
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
