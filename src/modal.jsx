import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let parsed = JSON.parse(this.props.price);
    if(this.props.open) {
      return (
        <div className="fullModal" onClick={ () => this.props.closeModal()}>
          <div className="modalContent" onClick = {(e) => e.stopPropagation()}>
            <div className='item-name-modal'>
              {this.props.children.market_hash_name}
            </div>
            <img className='skin-picture-modal' src={this.props.children.icon_url}></img>
            <div>
              Average Price: ${parsed.average_price}
            </div>
            <div>
              Median Price: ${parsed.median_price}
            </div>
            <div>
              Highest Sold: ${parsed.highest_price}
            </div>
            <div>
              Lowest Sold: ${parsed.lowest_price}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
