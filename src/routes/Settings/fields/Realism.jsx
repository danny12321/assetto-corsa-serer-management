import React from "react";

export default data => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td>Fuel Rate</td>
            <td>
              <input type="number" defaultValue={data.SERVER.FUEL_RATE} />
            </td>
          </tr>

          <tr>
            <td>Damage Rate</td>
            <td>
              <input type="number" defaultValue={data.SERVER.DAMAGE_MULTIPLIER} />
            </td>
          </tr>

          <tr>
            <td>Tyre Wear Rate</td>
            <td>
              <input type="number" defaultValue={data.SERVER.TYRE_WEAR_RATE} />
            </td>
          </tr>

          <tr>
            <td>Allowed Tires Out</td>
            <td>
              <select defaultValue={data.SERVER.ALLOWED_TYRES_OUT}>
                <option value="2">2</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Max Ballast</td>
            <td>
              <input type="number" />
            </td>
          </tr>

          <tr>
            <td>Jump start</td>
            <td>
              <select disabled>
                <option value="">Teleport To Pit</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <input type="checkbox" disabled />
        Disable Gas Cut Penalty
      </div>
    </React.Fragment>
  );
};
