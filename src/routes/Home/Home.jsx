import React, { Component } from "react";
import Paper from "../../components/Paper";

export default class Home extends Component {
  render() {
    return (
      <div className="route home">

        <Paper title="Welcome">
          Thanks for using AC Server manager!
        </Paper>


        <Paper title="Todo's">
          <ul>
            <li>Save Settings</li>
            <li>Select track</li>
            <li>Change weather</li>
            <li>Make instructions</li>
            <li>Better styling</li>
          </ul>
        </Paper>
      </div>
    );
  }
}
