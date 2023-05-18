import React from "react";
import { Radio } from "components";

export default {
  title: "hardik_s_application11/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray400",
  size: "md",
  inputClassName: "mr-1",
};
