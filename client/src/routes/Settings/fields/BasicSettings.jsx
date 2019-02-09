import React from "react";

export default (data) => {
  console.log(data)
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>
              <input />
            </td>
          </tr>

          <tr>
            <td>Adminpsw</td>
            <td>
              <input />
            </td>
          </tr>

          <tr>
            <td>Result Screen Time</td>
            <td>
              <input />
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
        <input type="checkbox" id /> Show on Lobby
      </div>
    </React.Fragment>
  );
};
