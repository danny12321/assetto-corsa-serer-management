import React, { Component } from "react";
import Paper from "../../components/Paper";

export default class Home extends Component {
  render() {
    return (
      <div className="home">

        <Paper title="Welcome">
          Thanks for using AC Server manager!
        </Paper>


        <Paper title="Todo's">
          <ul>
            <li>Save Settings</li>
            <li>Select track</li>
            <li>List cars</li>
            <li>Select cars</li>
            <li>Change weather</li>
            <li>Make instructions</li>
          </ul>
        </Paper>
      </div>
    );
  }
}
