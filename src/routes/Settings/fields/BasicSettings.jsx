import React from "react";
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox';

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

      <Checkbox
        id="pickup_mode"
        defaultChecked={parseInt(data.SERVER.PICKUP_MODE_ENABLED)}
        label="Pickup Mode"
      />

      <Checkbox
        id="loop_mode"
        defaultChecked={parseInt(data.SERVER.LOOP_MODE)}
        label="Loop Mode"
      />

      <Checkbox
        id="pickup_locked_entry_list"
        label="Pickup Locked Entry List"
        disabled
      />

      <Checkbox
        id="show_on_lobby"
        label="Show on Lobby"
        disabled
      />

    </React.Fragment>
  );
};
