import React from "react";

export default data => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input id="name" defaultValue={data.SERVER.NAME} />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>
              <input id="pwd" defaultValue={data.SERVER.PASSWORD} />
            </td>
          </tr>

          <tr>
            <td>Adminpsw</td>
            <td>
              <input id="c" defaultValue={data.SERVER.ADMIN_PASSWORD} />
            </td>
          </tr>

          <tr>
            <td>Result Screen Time</td>
            <td>
              <input defaultValue={"UNKNOWN"} />
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <input id="pickup_mode" type="checkbox" defaultChecked={parseInt(data.SERVER.PICKUP_MODE_ENABLED)} /> <label htmlFor="pickup_mode">Pickup Mode</label>
      </div>

      <div>
        <input id="loop_mode" type="checkbox" defaultChecked={parseInt(data.SERVER.LOOP_MODE)} /> <label htmlFor="loop_mode">Loop Mode</label>
      </div>

      <div>
        <input id="pickup_locked_entry_list" type="checkbox" disabled /> <label htmlFor="pickup_locked_entry_list">Pickup Locked Entry List</label>
      </div>

      <div>
        <input id="show_on_lobby" type="checkbox" disabled /> <label htmlFor="show_on_lobby">Show on Lobby</label>
      </div>
    </React.Fragment>
  );
};
