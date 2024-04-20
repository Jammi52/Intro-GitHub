import MenuNavbar from "app/components/MenuNavbar";
import React from "react";

const LayoutFrontal = ({ children }) => {
  return (
    <>
      <MenuNavbar />
      <div className="container">{children}</div>
    </>
  );
};

export default LayoutFrontal;
