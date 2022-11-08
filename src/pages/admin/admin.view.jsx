import React from "react";
import styled from "styled-components";

import AddQuestionForm, { AuthModal } from "./components/admin.component";

const AdminContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 12px;

  width: 100vw;
  height: 100vh;
`;

const AdminView = ({
  formRef,
  addQuestion,
  authRef,
  authorize,
  isAuthorized,
}) => {
  console.log(isAuthorized);
  return (
    <AdminContainer>
      <h1
        style={{
          fontFamily: "Google Sans",
          fontSize: 45,
          color: "var(--gdsc-core-blue1)",
        }}
      >
        Admin
      </h1>
      {isAuthorized ? (
        <AddQuestionForm formRef={formRef} addQuestion={addQuestion} />
      ) : (
        <AuthModal authRef={authRef} authorize={authorize} />
      )}
    </AdminContainer>
  );
};

export default AdminView;
