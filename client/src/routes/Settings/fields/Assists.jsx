import React from "react";

export default data => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td>ABS Allowed</td>
            <td>
              <select>
                <option value="">Factory</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>TC Allowed</td>
            <td>
              <select>
                <option value="">Factory</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <input
          type="checkbox"
          defaultChecked={parseInt(data.SERVER.STABILITY_ALLOWED)}
        />
        Stabilty Aid
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={parseInt(data.SERVER.AUTOCLUTCH_ALLOWED)}
        />
        Auto clutch
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={parseInt(data.SERVER.TYRE_BLANKETS_ALLOWED)}
        />
        Tyre Blackets
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={parseInt(data.SERVER.FORCE_VIRTUAL_MIRROR)}
        />
        Force Virtual Mirror
      </div>
    </React.Fragment>
  );
};
