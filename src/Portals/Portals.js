import React, { Component } from 'react';
import Modal from './Modal';

class Portals extends Component {
  state = {
    show: false
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>show modal</button>
        {this.state.show && <Modal>
          <h3>Modal created buy portal <button onClick={this.toggleModal}>X</button></h3>
        </Modal>}
      </div>
    );
  }
}

export default Portals;
