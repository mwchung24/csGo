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
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Load;
