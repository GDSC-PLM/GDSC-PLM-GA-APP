import React from "react";
import styled from "styled-components";

const FormContainer = styled.main`
  min-width: 350px;
  background-color: #fff;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 2rem;

  border-radius: 16px;

  section {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-family: "Google Sans";
  color: var(--gdsc-text-primary);
`;

const FormInput = styled.input`
  font-family: "Google Sans";

  padding: 0.5rem;
  border: 2px solid var(--gdsc-text-body);
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 2px solid var(--gdsc-core-blue1);
  }

  transition: 300ms ease-in-out;
`;

const FormSubmit = styled.button`
  font-family: "Google Sans";
  font-size: 1rem;
  font-weight: 600;

  color: #fff;
  background: var(--gdsc-core-blue1);

  padding: 1rem;
  border: 2px solid var(--gdsc-core-blue1);
  border-radius: 10px;

  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: #fff;
    border: 2px solid var(--gdsc-core-blue1);
    color: var(--gdsc-core-blue1);
  }
`;

const AddQuestionForm = ({ formRef, addQuestion }) => {
  return (
    <FormContainer>
      <AddForm ref={formRef} onSubmit={addQuestion}>
        <section>
          <FormLabel htmlFor="prompt">Prompt</FormLabel>
          <FormInput
            id="prompt"
            name="prompt"
            placeholder="Enter prompt here"
          />
        </section>

        <section>
          <FormLabel htmlFor="choice">Choices</FormLabel>
          <FormInput
            id="choice"
            name="choice-1"
            placeholder="Enter choice 1 here"
          />
          <FormInput
            id="choice"
            name="choice-2"
            placeholder="Enter choice 2 here"
          />
          <FormInput
            id="choice"
            name="choice-3"
            placeholder="Enter choice 3 here"
          />
          <FormInput
            id="choice"
            name="choice-4"
            placeholder="Enter choice 4 here"
          />
        </section>

        <section>
          <FormLabel htmlFor="ans">Answer</FormLabel>
          <FormInput id="ans" name="answer" placeholder="Enter answer here" />
        </section>

        <FormSubmit type="submit">Add Question</FormSubmit>
      </AddForm>
    </FormContainer>
  );
};

export default AddQuestionForm;
