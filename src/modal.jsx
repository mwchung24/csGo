import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    if(this.props.open) {
      return (
        <div className="fullModal" onClick={ () => this.props.closeModal()}>
          <div className="modalContent" onClick = {(e) => e.stopPropagation()}>
            <div className='item-name-modal'>
              {this.props.children.market_hash_name}
            </div>
            <img className='skin-picture-modal' src={this.props.children.icon_url}></img>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
