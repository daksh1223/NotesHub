import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextArea = styled.textarea`
  width: 87vw;
  height: 97.5%;
`;
const NoteForm = (props) => {
  // set the default state of the form
  const [value, setValue] = useState({ content: props.content || "" });
  // update the state when a user types in the form
  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: {
              ...value,
            },
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <button type="submit">Save</button>
      </Form>
    </Wrapper>
  );
};
export default NoteForm;