import React from "react";
import Input from '../../../components/Input'

export default data => {
  const checked = data.DYNAMIC_TRACK ? true : false;

  return (
    <React.Fragment>
      <div>
        <input id="dynamic_track" type="checkbox" defaultChecked={checked} /> <label htmlFor="dynamic_track">Dynamic Track</label>
      </div>

      <div>
        <select disabled>
          <option>CUSTOM</option>
          <option>ADD OTHERS</option>
        </select>
      </div>

      <table>
        <tbody>
          <tr>
            <td>Start value</td>
            <td>
              <input id="start_value" defaultValue={data.DYNAMIC_TRACK.SESSION_START} />
            </td>
          </tr>

          <tr>
            <td>Randomness</td>
            <td>
              <input id="randomness" defaultValue={data.DYNAMIC_TRACK.RANDOMNESS} />
            </td>
          </tr>

          <tr>
            <td>Transferred Grip</td>
            <td>
              <input id="transferred_grip" defaultValue={data.DYNAMIC_TRACK.SESSION_TRANSFER} />
            </td>
          </tr>

          <tr>
            <td>Laps to Improve Grip</td>
            <td>
              <input id="laps_to_improve_grip" defaultValue={data.DYNAMIC_TRACK.LAP_GAIN} />
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};
