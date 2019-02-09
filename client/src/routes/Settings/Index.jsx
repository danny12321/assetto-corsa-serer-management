import React, { Component } from "react";
import Paper from "../../components/Paper";
import axios from "axios";
import Loading from "../../components/Loading";

// Fields
import BasicSettings from "./fields/BasicSettings";
import DynamicTrack from "./fields/DynamicTrack";
import Assists from "./fields/Assists";
import Realism from "./fields/Realism";

export default class Settings extends Component {
  state = {
    config: null
  };

  componentDidMount() {
    this.fetchSettings();
  }

  fetchSettings() {
    axios.post("/api/settings/fetchAll").then(res => {
      console.log(res.data);
      this.setState({ config: res.data });
    });
  }

  save(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    if (!this.state.config) return <Loading />;

    return (
      <form onSubmit={this.save.bind(this)}>
        <div className="grid">
          <div className="grid__item">
            <Paper title="Basic settings">
              <BasicSettings {...this.state.config} />
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Dynamic Track">
              <DynamicTrack {...this.state.config} />
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Assists">
              <Assists {...this.state.config} />
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Realism">
              <Realism {...this.state.config} />
            </Paper>
          </div>

          <div className="grid__item">
            <Paper title="Voting and Banning">
              <div>body hiero</div>
            </Paper>
          </div>

          {/* <button type="submit">Save</button> */}
        </div>
      </form>
    );
  }
}
