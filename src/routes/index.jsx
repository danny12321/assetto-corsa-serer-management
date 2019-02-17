import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Settings from "./Settings/Settings";
import Sessions from "./Sessions/Sessions";
import Track from "./Track/Track";
import Cars from "./Cars/Cars";
import Skins from "./Skins/Skins";
import Server from "./Server/Server.jsx";

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
          <Route exact path="/skins" component={Skins} />
          <Route exact path="/server" component={Server} />
        </Switch>
      </div>
    );
  }
}
