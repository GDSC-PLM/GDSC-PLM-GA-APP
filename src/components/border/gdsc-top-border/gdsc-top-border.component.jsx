import React from "react";
import styled from "styled-components";

const BorderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 10px;

  position: absolute;
  top: 0;
  left: 0;
`;

const Colors = styled.div`
  background: ${({ bColor }) => `var(${bColor})`};
  width: 25%;
`;

const GDSCBorder = () => {
  return (
    <BorderContainer>
      <Colors bColor="--gdsc-core-red"></Colors>
      <Colors bColor="--gdsc-core-blue1"></Colors>
      <Colors bColor="--gdsc-core-yellow"></Colors>
      <Colors bColor="--gdsc-core-green"></Colors>
    </BorderContainer>
  );
};

export default GDSCBorder;
