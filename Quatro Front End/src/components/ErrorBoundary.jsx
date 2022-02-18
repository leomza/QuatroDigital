import React, { Component } from "react";
import logoStrawberry from "../assets/logoStrawberry.png";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>
            <img src={logoStrawberry} alt="logo Strawberry" />
          </div>
          <p>Something went wrong</p>
        </div>
      );
    }
    return this.props.children;
  }
}
