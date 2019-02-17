import React, { Component } from "react";
import Paper from "../../components/Paper";
import MyContext from '../../MyContext';

// Fields
import BasicSettings from "./fields/BasicSettings";
import DynamicTrack from "./fields/DynamicTrack";
import Assists from "./fields/Assists";
import Realism from "./fields/Realism";

class Settings extends Component {
  state = {
    config: null
  };

  setSettings(e) {
    let config = this.props.context.settings;
    switch (e.target.id) {
      case "name":
        config.SERVER.NAME = e.target.value
        break;

      case "pwd":
        config.SERVER.PASSWORD = e.target.value
        break;

      case "adminpwd":
        config.SERVER.ADMIN_PASSWORD = e.target.value
        break;

      case "pickup_mode":
        config.SERVER.PICKUP_MODE_ENABLED = e.target.checked
        break;

      case "loop_mode":
        config.SERVER.LOOP_MODE = e.target.checked
        break;

      case "dynamic_track":
        config.DYNAMIC_TRACK.active = e.target.checked
        break;

      case "start_value":
        config.DYNAMIC_TRACK.SESSION_START = e.target.value
        break;

      case "randomness":
        config.DYNAMIC_TRACK.RANDOMNESS = e.target.value
        break;

      case "transferred_grip":
        config.DYNAMIC_TRACK.SESSION_TRANSFER = e.target.value
        break;

      case "laps_to_improve_grip":
        config.DYNAMIC_TRACK.LAP_GAIN = e.target.value
        break;

      default:
        console.error(e.target, " is not ready to be configured")
    }

    this.props.context.setSettings(config)
  }

  render() {
    const config = this.props.context.settings;

    return (
      <form onChange={this.setSettings.bind(this)}>
        <div className="flex">
          <div>
            <Paper title="Basic settings">
              <BasicSettings {...config} />
            </Paper>
          </div>

          <div>
            <Paper title="Dynamic Track">
              <DynamicTrack {...config} />
            </Paper>
          </div>

          <div>
            <Paper title="Assists">
              <Assists {...config} />
            </Paper>
          </div>

          <div>
            <Paper title="Realism">
              <Realism {...config} />
            </Paper>
          </div>

          <div>
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


export default props => (
  <MyContext.Consumer>
    {context => <Settings {...props} context={context} />}
  </MyContext.Consumer>
)