import React, { Component } from 'react';

class Load extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.load) {
      return (
        <div className='loading'>
          LOADING
          <img className="loading-wheel" src={"http://orig03.deviantart.net/6e9c/f/2015/039/1/e/spinning_colorwheel_by_sykaeh-d8h4xr0.gif"}></img>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Load;
