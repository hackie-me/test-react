import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border border-blue_gray_300 border-solid",
  srcFillGray90006: "bg-gray_900_06",
  srcOutlineBluegray200:
    "bg-white_A700 border border-blue_gray_200 border-solid shadow-bs",
  srcOutlineBluegray100:
    "bg-white_A700 border border-blue_gray_100 border-solid",
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  OutlineGray70011: "bg-gray_50 shadow-bs4",
  FillBlue50: "bg-blue_50",
  OutlineBluegray300: "bg-white_A700 border border-blue_gray_300 border-solid",
  UnderLineBluegray100: "border-b border-blue_gray_100",
  OutlineBluegray100_1: "bg-gray_50 border border-blue_gray_100 border-solid",
  FillGreen500: "bg-green_500",
  OutlineBlueA70001: "bg-white_A700 border border-blue_A700_01 border-solid",
  FillBlueA20004: "bg-blue_A200_04",
  OutlineBluegray100_2:
    "bg-gray_900_9b border border-blue_gray_100 border-solid",
  Outline: "bg-blue_gray_50 bg-gradient2  border border-solid",
};
const shapes = {
  srcRoundedBorder6: "rounded-md",
  RoundedBorder6: "rounded-md",
  CircleBorder23: "rounded-[23px]",
  CustomBorderTL6: "rounded-tl-md rounded-tr-md",
};
const sizes = {
  smSrc: "p-2.5",
  mdSrc: "p-[13px]",
  lgSrc: "pb-2 pt-4 px-2",
  xlSrc: "p-[17px]",
  sm: "pb-[13px] pt-1 px-1",
  md: "p-2.5",
  lg: "pb-[22px] pt-[13px] px-[13px]",
  xl: "p-[13px]",
  "2xl": "pb-[9px] pt-3.5 px-[9px]",
  "3xl": "pb-[19px] pt-3.5 px-3.5",
  "4xl": "p-[17px]",
  "5xl": "pb-[13px] pt-[18px] px-[13px]",
  "6xl": "pb-[35px] pt-6 sm:px-5 px-6",
  "7xl": "p-[27px] sm:px-5",
  "8xl": "p-[31px] sm:px-5",
  "9xl": "pb-[17px]",
  "10xl": "pb-[33px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder6",
    "RoundedBorder6",
    "CircleBorder23",
    "CustomBorderTL6",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray300",
    "srcFillGray90006",
    "srcOutlineBluegray200",
    "srcOutlineBluegray100",
    "OutlineBluegray100",
    "OutlineGray70011",
    "FillBlue50",
    "OutlineBluegray300",
    "UnderLineBluegray100",
    "OutlineBluegray100_1",
    "FillGreen500",
    "OutlineBlueA70001",
    "FillBlueA20004",
    "OutlineBluegray100_2",
    "Outline",
  ]),
  size: PropTypes.oneOf([
    "smSrc",
    "mdSrc",
    "lgSrc",
    "xlSrc",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
    "10xl",
  ]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
