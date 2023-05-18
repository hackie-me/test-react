import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillBlueA70001: "bg-blue_A700_01",
  OutlineBluegray400: "bg-white_A700 border border-blue_gray_400 border-solid",
  OutlineBluegray200: "bg-white_A700 border border-blue_gray_200 border-solid",
  FillBlueA70001_1: "bg-blue_A700_01",
};
const shapes = {
  RoundedBorder8: "rounded-lg",
  RoundedBorder12: "rounded-[12px]",
};
const sizes = {
  sm: "pt-1",
  md: "p-[5px]",
  lg: "pt-[7px]",
  xl: "p-[29px] sm:px-5",
  "2xl": "pb-6 pt-[31px] sm:px-5 px-6",
};

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      onChange,
      shape,
      variant,
      size,
      id = "radio_id",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    const handleChange = (event) => {
      setValue(event.target.checked);
      if (onChange) onChange(!!event?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder12"]),
  variant: PropTypes.oneOf([
    "FillBlueA70001",
    "OutlineBluegray400",
    "OutlineBluegray200",
    "FillBlueA70001_1",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "",
  size: "",
};

export { Radio };
