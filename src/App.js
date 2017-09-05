import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.items_popular = this.items_popular.bind(this);
    this.items = this.items.bind(this);
  }


  componentWillMount() {
    let items_popular = require('./items_popular.json');
    this.setState({
      "items_popular" : items_popular.items
    });

    let items = require('./items.json');
    console.log(items.items);
    this.setState({
      "items" : items.items
    });

    // console.log(this.state);
    // let xhr = new XMLHttpRequest();
    //
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.status);
    //     console.log(xhr.statusText);
    //     console.log(xhr.responseText);
    //   }
    // };

    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items?key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?limit=100&key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.send();
  }

  items_popular() {
    let items_popular = this.state.items_popular;
    let listed = items_popular.map((item) => {
      return (
        <li>
          {item.market_hash_name}
        </li>
      );
    });

    return listed;
  }

  items() {
    let items = this.state.items;
    let listed = items.map((item) => {
      return (
        <li>
          {item.market_hash_name}
          <img src={item.icon_url}>
          </img>
        </li>
      );
    });
    return listed;
  }

  render() {
    return (
      <section>
        <ul>
          {this.items()}
        </ul>
      </section>
    );
    // <section>
    //   <ul>
    //     {this.items_popular()}
    //   </ul>
    // </section>
  }
}

export default App;
