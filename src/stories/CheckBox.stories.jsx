import React from "react";
import { CheckBox } from "components";

export default {
  title: "hardik_s_application11/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray100",
  size: "sm",
  inputClassName: "mr-1",
};
