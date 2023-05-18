import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-md",
  RoundedBorder9: "rounded-[9.47px]",
  RoundedBorder3: "rounded-[3px]",
  CircleBorder23: "rounded-[23px]",
  CircleBorder15: "rounded-[15px]",
  CustomBorderBL10: "rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]",
  RoundedBorder12: "rounded-[12px]",
  icbRoundedBorder3: "rounded-[3px]",
  icbCustomBorderTL6: "rounded-bl-md rounded-tl-md",
  icbCustomBorderLR6: "rounded-br-md rounded-tr-md",
  icbRoundedBorder6: "rounded-md",
  icbRoundedBorder37: "rounded-[37.965px]",
  icbCircleBorder25: "rounded-[25px]",
  icbRoundedBorder12: "rounded-[12px]",
  icbCircleBorder28: "rounded-[28px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder16: "rounded-[16px]",
  icbCircleBorder32: "rounded-[32px]",
};
const variants = {
  FillBlueA70001: "bg-blue_A700_01",
  OutlineBlueA70001:
    "border border-blue_A700_01 border-solid text-blue_A700_01",
  OutlineBluegray400: "border border-blue_gray_400 border-solid",
  FillBluegray50: "bg-blue_gray_50",
  FillLightblue100: "bg-light_blue_100 text-black_900",
  FillRed200: "bg-red_200 text-black_900",
  FillGreenA100: "bg-green_A100 text-black_900",
  FillGreen600: "bg-green_600 text-gray_50",
  FillBlue50: "bg-blue_50",
  FillBluegray100: "bg-blue_gray_100 text-black_900_01",
  OutlineBlack9000c:
    "bg-gray_100_01 border-[0.5px] border-black_900_0c border-solid text-black_900",
  Outline:
    "bg-gradient3  bg-white_A700_b2 outline outline-[1px] text-black_900_e4",
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  FillGray10002: "bg-gray_100_02 text-red_700",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_400",
  FillRed700: "bg-red_700 text-gray_100_03",
  FillOrangeA700: "bg-orange_A700 text-gray_50_06",
  OutlineBlueA70001_1:
    "bg-gray_50 border border-blue_A700_01 border-solid text-blue_A700_01",
  OutlineGreen600:
    "bg-gray_100_04 border border-green_600 border-solid text-green_600",
  OutlineAmber500:
    "bg-gray_50_07 border border-amber_500 border-solid text-amber_500",
  FillBluegray400: "bg-blue_gray_400 text-gray_50",
  OutlineBluegray400_1:
    "bg-white_A700 border border-blue_gray_400 border-solid text-blue_gray_400",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  FillIndigo50: "bg-indigo_50 text-black_900",
  GradientBlack90066Black90066: "bg-gradient  text-white_A700",
  FillGray10004: "bg-gray_100_04 text-green_600",
  FillGray5007: "bg-gray_50_07 text-amber_700",
  OutlineBluegray90014: "bg-blue_A700_01 shadow-bs3 text-white_A700",
  OutlineBlueA70001_2:
    "bg-white_A700 border border-blue_A700_01 border-solid text-blue_A700_01",
  FillBlueA20004: "bg-blue_A200_04 text-white_A700",
  icbOutlineBluegray100: "border border-blue_gray_100 border-solid",
  icbOutlineBluegray50:
    "bg-white_A700 border border-blue_gray_50 border-solid shadow-bs4",
  icbFillBluegray50: "bg-blue_gray_50",
  icbOutlineGray100: "border border-gray_100 border-solid",
  icbFillBlueA70001: "bg-blue_A700_01",
  icbOutlineBlueA70001:
    "bg-white_A700 border border-blue_A700_01 border-solid shadow-bs1",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs1",
  icbOutlineBluegray10002: "border border-blue_gray_100_02 border-solid",
  icbFillGray90006: "bg-gray_900_06",
  icbFillBluegray90003: "bg-blue_gray_900_03",
  icbOutlineBluegray400:
    "bg-white_A700 border border-blue_gray_400 border-solid",
  icbFillBlue50: "bg-blue_50",
  icbOutlineBluegray100_1:
    "bg-white_A700 border border-blue_gray_100 border-solid",
  icbFillGray30003: "bg-gray_300_03",
  icbFillGray5008: "bg-gray_50_08",
  icbFillRed400: "bg-red_400",
  icbFillBlueA20003: "bg-blue_A200_03",
  icbOutlineBlue50: "bg-gray_50 border-2 border-blue_50 border-solid",
  icbGradientBlack90066Black90066: "bg-gradient ",
  icbFillBlue507f: "bg-blue_50_7f",
  icbFillBlack900: "bg-black_900",
  icbFillBluegray30087: "bg-blue_gray_300_87",
  icbOutlineGray50: "bg-blue_A700_01 outline outline-[1.5px] outline-gray_50",
  icbFillBlueA20004: "bg-blue_A200_04",
  icbOutlineGray5010:
    "bg-blue_A700_01 outline outline-[3.33px] outline-gray_50_10",
  icbOutline: "bg-gradient1 ",
  icbOutlineBlack9004d: "bg-white_A700 shadow-bs2",
  icbOutlineBlack9004d_1: "bg-red_A200_01 shadow-bs2",
  icbOutlineBlack9004d_2: "bg-blue_gray_400 shadow-bs2",
  icbOutline_1: "bg-blue_gray_50 bg-gradient4  border border-solid",
};
const sizes = {
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-2.5",
  xl: "p-3.5",
  "2xl": "p-[17px]",
  "3xl": "p-[21px] sm:px-5",
  "4xl": "p-[33px] sm:px-5",
  smIcn: "p-0.5",
  mdIcn: "p-[5px]",
  lgIcn: "p-2.5",
  xlIcn: "p-[13px]",
  "2xlIcn": "p-4",
  "3xlIcn": "p-5",
  "4xlIcn": "p-6 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "RoundedBorder9",
    "RoundedBorder3",
    "CircleBorder23",
    "CircleBorder15",
    "CustomBorderBL10",
    "RoundedBorder12",
    "icbRoundedBorder3",
    "icbCustomBorderTL6",
    "icbCustomBorderLR6",
    "icbRoundedBorder6",
    "icbRoundedBorder37",
    "icbCircleBorder25",
    "icbRoundedBorder12",
    "icbCircleBorder28",
    "icbCircleBorder20",
    "icbCircleBorder16",
    "icbCircleBorder32",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA70001",
    "OutlineBlueA70001",
    "OutlineBluegray400",
    "FillBluegray50",
    "FillLightblue100",
    "FillRed200",
    "FillGreenA100",
    "FillGreen600",
    "FillBlue50",
    "FillBluegray100",
    "OutlineBlack9000c",
    "Outline",
    "OutlineBluegray100",
    "FillGray10002",
    "FillDeeporange50",
    "FillRed700",
    "FillOrangeA700",
    "OutlineBlueA70001_1",
    "OutlineGreen600",
    "OutlineAmber500",
    "FillBluegray400",
    "OutlineBluegray400_1",
    "FillDeeporange300",
    "FillIndigo50",
    "GradientBlack90066Black90066",
    "FillGray10004",
    "FillGray5007",
    "OutlineBluegray90014",
    "OutlineBlueA70001_2",
    "FillBlueA20004",
    "icbOutlineBluegray100",
    "icbOutlineBluegray50",
    "icbFillBluegray50",
    "icbOutlineGray100",
    "icbFillBlueA70001",
    "icbOutlineBlueA70001",
    "icbOutlineBlack9000c",
    "icbOutlineBluegray10002",
    "icbFillGray90006",
    "icbFillBluegray90003",
    "icbOutlineBluegray400",
    "icbFillBlue50",
    "icbOutlineBluegray100_1",
    "icbFillGray30003",
    "icbFillGray5008",
    "icbFillRed400",
    "icbFillBlueA20003",
    "icbOutlineBlue50",
    "icbGradientBlack90066Black90066",
    "icbFillBlue507f",
    "icbFillBlack900",
    "icbFillBluegray30087",
    "icbOutlineGray50",
    "icbFillBlueA20004",
    "icbOutlineGray5010",
    "icbOutline",
    "icbOutlineBlack9004d",
    "icbOutlineBlack9004d_1",
    "icbOutlineBlack9004d_2",
    "icbOutline_1",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
    "4xlIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
