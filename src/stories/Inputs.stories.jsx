import React from "react";

import { Input } from "components";

export default {
  title: "hardik_s_application11/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder6",
  variant: "srcOutlineBluegray300",
  size: "xlSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
