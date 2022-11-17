import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../instructions-modal";

import SessionExpired from "./session-expired.component";

const SessionExpiredModal = () => {
  const navigate = useNavigate();
  const navigateToWelcome = () => navigate("/");

  return (
    <Modal>
      <SessionExpired {...{ navigateToWelcome }} />
    </Modal>
  );
};

export default SessionExpiredModal;
