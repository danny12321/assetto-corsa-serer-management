import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home/Home";
import Settings from "./Settings/Settings";
import Sessions from "./Sessions/Sessions";
import Track from "./Track/Track";
import Cars from "./Cars/Cars";
import Server from "./Server/Server.jsx";

function Index({ location }) {
  return (

    <div className="container">
      <div className="container__background" />
      <div className="container__inner">

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames={'fade'}
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/sessions" component={Sessions} />
              <Route exact path="/Track" component={Track} />
              <Route exact path="/cars" component={Cars} />
              <Route exact path="/server" component={Server} />
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}


export default withRouter(Index)