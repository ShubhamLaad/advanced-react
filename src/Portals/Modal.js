import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './modal.css';

const modalRoot = document.getElementsByTagName('body')[0];
class Modal extends Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el);
    modalRoot.classList.add('modal-open');
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRoot.removeChild(this.el);
    modalRoot.classList.remove('modal-open');
  }

  renderModal() {
    return (
      <div className="modal" style={{ position: 'relative', zIndex: 1050 }}>
        <div className="modal-content">
          {this.props.children}
        </div>
        <div className="modal-backdrop"></div>
      </div>
    )
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.renderModal(),
      // A DOM element
      this.el,
    );
  }
}

export default Modal;
