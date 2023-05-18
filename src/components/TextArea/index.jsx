import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  OutlineBluegray50: "bg-white_A700 border border-blue_gray_50 border-solid",
};
const shapes = { RoundedBorder8: "rounded-lg" };
const sizes = {
  sm: "pb-[35px] pt-3 px-3",
  md: "pb-[35px] pt-[19px] px-[19px]",
};

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineBluegray100", "OutlineBluegray50"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "",
  variant: "",
  size: "",
};
export { TextArea };
