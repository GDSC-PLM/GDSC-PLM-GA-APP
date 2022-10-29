import React, { useContext } from "react";
import styled from "styled-components";

import useWelcomeHook from "../../../pages/welcome/welcome.hook";
import InstructionsModalComponent from "./instructions-modal.component";
import AppContext from "../../../context/app.context";

const Modal = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #f4f4f4;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 99999;
`;

const InstructionsModal = () => {
  const { showInstructionsModal } = useContext(AppContext);
  const { navigateToQuiz } = useWelcomeHook(AppContext);

  return showInstructionsModal ? (
    <Modal>
      <InstructionsModalComponent {...{ navigateToQuiz }} />
    </Modal>
  ) : null;
};

export default InstructionsModal;
