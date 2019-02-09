import React from "react";

export default data => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input defaultValue={data.SERVER.NAME} />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>
              <input defaultValue={data.SERVER.PASSWORD} />
            </td>
          </tr>

          <tr>
            <td>Adminpsw</td>
            <td>
              <input defaultValue={data.SERVER.ADMIN_PASSWORD} />
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
        <input type="checkbox" /> Pickup Mode
      </div>

      <div>
        <input type="checkbox" /> Loop Mode
      </div>

      <div>
        <input type="checkbox" /> Pickup Locked Entry List
      </div>

      <div>
        <input type="checkbox" /> Show on Lobby
      </div>
    </React.Fragment>
  );
};
