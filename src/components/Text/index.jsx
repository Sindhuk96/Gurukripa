import React from "react";

const sizeClasses = {
  txtMontserratRomanRegular20WhiteA700: "font-montserrat font-normal",
  txtPoppinsBold40: "font-bold font-poppins",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanBold30: "font-bold font-montserrat",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanBold60: "font-bold font-montserrat",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtPoppinsBold40Black900: "font-bold font-poppins",
  txtMontserratRomanRegular978: "font-montserrat font-normal",
  txtPoppinsBold50: "font-bold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtMontserratRomanBold20WhiteA700: "font-bold font-montserrat",
  txtMontserratRomanRegular20Black900: "font-montserrat font-normal",
  txtMontserratRomanBold1174: "font-bold font-montserrat",
  txtPoppinsBold2055: "font-bold font-poppins",
  txtPoppinsRegular137: "font-normal font-poppins",
  txtMontserratRomanBold978: "font-bold font-montserrat",
  txtMontserratRomanRegular783: "font-montserrat font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
