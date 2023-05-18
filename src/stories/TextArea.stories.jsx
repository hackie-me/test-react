import React from "react";
import { TextArea } from "components";

export default {
  title: "hardik_s_application11/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineBluegray100",
  size: "sm",
  placeholder: "placeholder",
};
