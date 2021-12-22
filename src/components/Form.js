import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  border: 1px solid black;
  padding: 1%;
`;
const Propertywrapper = styled.div`
  flex-direction: row;
  label {
    font-weight: bold;
  }
  input {
    width: 70vw;
    float: right;
  }
  margin-bottom: 0.5%;
  margin-top: 0.5%;
`;
const Button = styled.button`
  background-color: yellow;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: green;
  }
`;
export default function Form(props) {
  const [values, setvalues] = useState();
  const onChange = (event) => {
    setvalues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div>
      {" "}
      <div>
        <Wrapper
          onSubmit={(event) => {
            event.preventDefault();
            
            props.action({
              variables: { ...values },
            });
          }}
        >
          {props.type === "signup" ? <b>SignUp</b> : <b>Login</b>}
          <Propertywrapper>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={onChange}
            ></input>
          </Propertywrapper>
          <Propertywrapper>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={onChange}
            ></input>
          </Propertywrapper>
          <Propertywrapper>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={onChange}
            ></input>
          </Propertywrapper>
          <Button>Submit</Button>
        </Wrapper>
      </div>
    </div>
  );
}
