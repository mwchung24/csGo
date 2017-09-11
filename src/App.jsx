import React, { Component } from 'react';
import './App.css';
import Modal from './modal.jsx';
import Load from './load.jsx';
import Search from './search.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      item: null,
      price: null,
      items: null,
      loading: false,
      search: "",
    };

    this.items_popular = this.items_popular.bind(this);
    this.items = this.items.bind(this);
    this.header = this.header.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.price = this.price.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.load = this.load.bind(this);
    this.search = this.search.bind(this);
  }


  componentWillMount() {
    let items_popular = require('./items_popular.json');
    this.setState({
      "items_popular" : items_popular.items
    });

    let items = require('./items.json');
    // console.log(items.items);
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
    // let market_hash_name = "★ Bayonet";
    // // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?key=1c6ebe8e60761812d139c06197b0b71e", true);
    // // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items?key=1c6ebe8e60761812d139c06197b0b71e", true);
    // // xhr.open("GET", "http://api.csgo.steamlytics.xyz/v1/items/popular?limit=100&key=1c6ebe8e60761812d139c06197b0b71e", true);
    // xhr.open("GET", `http://api.csgo.steamlytics.xyz/v1/prices/${market_hash_name}?key=1c6ebe8e60761812d139c06197b0b71e`, true);
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
        <li className="item" onClick={(e) => this.openModal(e, item)}>
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
        <Search
          search = {(input) => this.search(input)}
        />
        <div>
          CSGO Skins
        </div>
      </div>
    );
  }

  handleClick(item) {
    console.log(item);
    // this.setState({
    //
    // })
  }

  openModal(e, item) {
    e.stopPropagation();
    // this.setState({
    //   open: !this.state.open,
    //   item: item
    // });

    this.price(item, this.setPrice);
  }

  price (item, callback) {
    // debugger
    let xhr = new XMLHttpRequest();
    let item_price;
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseText);
        item_price = xhr.responseText;
        callback(item, item_price);
      }
    };
    let market_hash_name = item.market_hash_name;
    xhr.open("GET", `http://api.csgo.steamlytics.xyz/v1/prices/${market_hash_name}?key=1c6ebe8e60761812d139c06197b0b71e`, true);
    xhr.send();
    this.setState({
      loading: true,
    });

    this.load();
  }

  load() {
    if (this.state.loading) {
      // debugger
      return (
        <div className="loading">LOADING</div>
      );
    } else {
      return null;
    }
  }

  setPrice(item, item_price) {
    this.setState({
      open: !this.state.open,
      item: item,
      price: item_price,
      loading: false,
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  search(input) {
    if (input) {
      return (
        <div></div>
      );
    } else {
      return (
        this.items()
      );
    }
  }

  render() {
    return (
      <section>
        {this.header()}
        <ul className="skins">
          {this.search()}
        </ul>

        <Modal
          closeModal = {() => this.closeModal()}
          open = {this.state.open}
          children = {this.state.item}
          price = {this.state.price}
        />

        <Load
          load = {this.state.loading}
        />
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
