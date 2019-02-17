import React, { Component } from "react";
let open = false;
let transition = 500;
let keyRandom;

export default class Panel extends Component {
  handleClick(e) {
    open = !open;
    const panelBody = e.target.parentElement.querySelector(".panel__body");
    const height = e.target.parentElement.querySelector(".panel__body > div")
      .offsetHeight;
    const randomKey = Math.random();
    keyRandom = randomKey;

    panelBody.style.transition = transition + "ms";

    if (open) {
      panelBody.style.maxHeight = height + "px";
    } else {
      panelBody.style.maxHeight = height + "px";
      setTimeout(() => {
        panelBody.style.maxHeight = 0;
      }, 0);
    }

    setTimeout(() => {
      if (keyRandom === randomKey && open === true) {
        panelBody.style.maxHeight = "none";
      }
    }, transition);
  }

  render() {
    return (
      <div className="panel">
        <div className="panel__header" onClick={this.handleClick.bind(this)}>
          {this.props.title}
        </div>

        <div className={`panel__body`}>
          <div>{this.props.body}</div>
        </div>
      </div>
    );
  }
}
