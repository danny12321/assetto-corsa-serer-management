import React, { Component } from "react";

export default class Paper extends Component {
  render() {
    return (
      <div className={`paper ${this.props.isSelected ? 'selected' : ''}`}>
        <div className="paper__title">{this.props.title}</div>

        <div className="paper__body">{this.props.children}</div>
      </div>
    );
  }
}
