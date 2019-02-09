import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="header__title">AC Manager</div>
        </Link>

        <div className="header__items">
          <Link to="/settings">
            <div className="header__items__item">Settings</div>
          </Link>

          <Link to="/sessions">
            <div className="header__items__item">Sessions / Weather</div>
          </Link>

          <Link to="/track">
            <div className="header__items__item">Track</div>
          </Link>

          <Link to="/cars">
            <div className="header__items__item">Cars</div>
          </Link>
        </div>
      </header>
    );
  }
}
