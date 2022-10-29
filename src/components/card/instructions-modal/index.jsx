import React from "react";
import styled from "styled-components";
import InstructionsModalComponent from "./instructions-modal.component";

const Modal = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  max-height: 100vh;

  background-color: #f4f4f4;

  position: fixed;
  top: 0;
  left: 0;
`;

const InstructionsModal = () => (
  <Modal>
    <InstructionsModalComponent />
  </Modal>
);

export default InstructionsModal;
