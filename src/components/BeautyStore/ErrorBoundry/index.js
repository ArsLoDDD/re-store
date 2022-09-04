import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

class ErrorBoundry extends Component {
  state = {
    isError: false,
  };
  componentDidCatch() {
    this.setState({ isError: true });
  }
  render() {
    if (this.state.isError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
