import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home/Index";
import Settings from "./Settings/Index";
import Sessions from "./Sessions/Index";
import Track from "./Track/Index";
import Cars from "./Cars/Index";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/Track" component={Track} />
          <Route exact path="/cars" component={Cars} />
        </Switch>
      </div>
    );
  }
}
