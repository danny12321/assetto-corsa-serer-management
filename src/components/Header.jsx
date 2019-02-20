import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from '../MyContext';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="header__title">AC Server Manager</div>
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

          <Link to="/server">
            <div className="header__items__item">Server</div>
          </Link>

        </div>
      </header>
    );
  }
}

export default props => (
  <MyContext.Consumer>
    {context => <Header {...props} context={context} />}
  </MyContext.Consumer>
)