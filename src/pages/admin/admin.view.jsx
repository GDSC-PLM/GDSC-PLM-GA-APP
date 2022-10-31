import React from "react";
import styled from "styled-components";

import AddQuestionForm from "./components/admin.component";

const AdminContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 12px;

  width: 100vw;
  height: 100vh;
`;

const AdminView = ({ formRef, addQuestion }) => {
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
      <AddQuestionForm formRef={formRef} addQuestion={addQuestion} />
    </AdminContainer>
  );
};

export default AdminView;
