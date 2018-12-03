import React, { PureComponent } from "react";

const loaderHOC = ({ listName }) => (WrappedComponent) => {
  return class LoaderHOC extends PureComponent {
    render() {
      return this.props.isLoader ? <p>Loader ...</p> : <WrappedComponent {...this.props} name="loader hoc props" listName={listName} />;
    }
  }
}

export default loaderHOC;
