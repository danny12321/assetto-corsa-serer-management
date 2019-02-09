import React, { Component } from "react";
import Paper from "../../components/Paper";

// Fields
import BasicSettings from "./fields/BasicSettings";

export default class Cars extends Component {
  save(e) {
    e.preventDefault();
    console.log(e.target)
  }

  render() {
    return (
      <form onSubmit={this.save.bind(this)}>
        <div className="grid">
          <div className="grid__item">
            <Paper title="Basic settings">
              <BasicSettings 
              
              />
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Dynamic Track">
              <div>body hiero</div>
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Assists">
              <div>body hiero</div>
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Realism">
              <div>body hiero</div>
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Voting and Banning">
              <div>body hiero</div>
            </Paper>
          </div>


      <button type="submit">Save</button>

        </div>
      </form>
    );
  }
}
