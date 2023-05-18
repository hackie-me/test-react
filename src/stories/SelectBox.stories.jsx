import React from "react";

import { SelectBox } from "components";

export default {
  title: "hardik_s_application11/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder6",
  variant: "OutlineBluegray100",
  size: "sm",
  className: "w-[300px]",
};
