import React from "react";

export default data => {
  const checked = data.DYNAMIC_TRACK ? true : false;

  return (
    <React.Fragment>
      <div>
        <input type="checkbox" defaultChecked={checked} /> Dynamic Track
      </div>

      <div>
        <select>
          <option>CUSTOM</option>
          <option>ADD OTHERS</option>
        </select>
      </div>

      <table>
        <tbody>
          <tr>
            <td>Start value</td>
            <td>
              <input defaultValue={data.DYNAMIC_TRACK.SESSION_START} />
            </td>
          </tr>

          <tr>
            <td>Randomness</td>
            <td>
              <input defaultValue={data.DYNAMIC_TRACK.RANDOMNESS} />
            </td>
          </tr>

          <tr>
            <td>Transferred Grip</td>
            <td>
              <input defaultValue={data.DYNAMIC_TRACK.SESSION_TRANSFER}/>
            </td>
          </tr>

          <tr>
            <td>Laps to Improve Grip</td>
            <td>
              <input defaultValue={data.DYNAMIC_TRACK.LAP_GAIN} />
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};
