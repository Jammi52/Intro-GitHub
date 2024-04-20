import RegisterTable from "app/components/RegisterTable";
import LayoutFrontal from "app/layout/LayoutFrontal";
import React from "react";

const Registers = () => {
  return (
    <>
      <LayoutFrontal>
        <div>REGISTROS</div>
        <RegisterTable />
      </LayoutFrontal>
    </>
  );
};

export default Registers;
