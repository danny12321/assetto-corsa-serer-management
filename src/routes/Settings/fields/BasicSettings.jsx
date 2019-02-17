import React from "react";
import Input from '../../../components/Input'

export default data => {
  return (
    <React.Fragment>

      <Input
        label="Name"
        id="name"
        defaultValue={data.SERVER.NAME}
      />

      <Input
        label="Password"
        id="pwd"
        defaultValue={data.SERVER.PASSWORD}
      />

      <Input
        label="Adminpsw"
        id="c"
        defaultValue={data.SERVER.ADMIN_PASSWORD}
      />

      <Input
        label="Result Screen Time"
        defaultValue={"UNKNOWN"}
      />

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
