import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.items_popular = this.items_popular.bind(this);
    this.items = this.items.bind(this);
    this.header = this.header.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount() {
    let items_popular = require('./items_popular.json');
    this.setState({
      "items_popular" : items_popular.items
    });

    let items = require('./items.json');
    console.log(items.items);
    this.setState({
      "items" : items.items.slice(0,10)
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
        <li className="item" onClick={this.handleClick(item)}>
          <img className='skin-picture' src={item.icon_url}></img>
          <div className = "skinName">
            {item.market_hash_name}
          </div>
        </li>
      );
    });
    return listed;
  }

  header() {
    return (
      <div className = "header">
        CSGO Skins
      </div>
    );
  }

  handleClick(item) {
    console.log(item);
  }

  render() {
    return (
      <section>
        {this.header()}
        <ul className="skins">
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
