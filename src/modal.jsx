import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    if(this.props.open) {

      return (
        <div className="fullModal" onClick={ () => this.props.closeModal()}>
          <div className="modalContent">
            hi
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
