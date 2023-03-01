import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[80px]",
  h2: "sm:text-[48px] md:text-[48px] text-[70px]",
  h3: "font-bold sm:text-[48px] md:text-[48px] text-[64px]",
  h4: "font-semibold sm:text-[48px] md:text-[48px] text-[60px]",
  h5: "font-bold sm:text-[42px] md:text-[48px] text-[56px]",
  h6: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  body1: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  body2: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  body3: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  body4: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  body5: "sm:text-[20px] md:text-[22px] text-[24px]",
  body6: "text-[20px]",
  body7: "text-[18px]",
  body8: "text-[16px]",
  body9: "font-bold text-[15px]",
  body10: "text-[14px]",
  body11: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
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
