import React from "react";

const variantClasses = {
  h1: "font-medium text-[8px]",
  h2: "sm:text-[38px] md:text-[44px] text-[52px]",
  h3: "font-normal sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h5: "font-medium sm:text-[33.3px] md:text-[35.3px] text-[37.3px]",
  h6: "text-4xl sm:text-[32px] md:text-[34px]",
  body1: "font-medium sm:text-3xl md:text-[32px] text-[34px]",
  body2: "md:text-3xl sm:text-[28px] text-[32px]",
  body3: "font-semibold sm:text-[24.8px] md:text-[26.8px] text-[28.8px]",
  body4: "sm:text-2xl md:text-[26px] text-[28px]",
  body5: "font-normal sm:text-[22.61px] md:text-[24.61px] text-[26.61px]",
  body6: "font-normal sm:text-[20.4px] md:text-[22.4px] text-[24.4px]",
  body7: "text-2xl md:text-[22px] sm:text-xl",
  body8: "font-semibold text-[22px] sm:text-lg md:text-xl",
  body9: "font-normal sm:text-[17.35px] md:text-[19.35px] text-[21.35px]",
  body10: "font-medium sm:text-[16.21px] md:text-[18.21px] text-[20.21px]",
  body11: "text-xl",
  body12: "text-lg",
  body13: "text-base",
  body14: "text-[15px]",
  body15: "text-sm",
  body16: "text-xs",
  body17: "font-medium sm:text-5xl md:text-5xl text-[100px]",
  body18: "text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
