import { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

const StyledLoginForm = styled.div`
  input.ant-input {
    display: inline-block;
    opacity: 0.7;
    line-height: 2rem;
    height: initial;
  }
  form.ant-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      margin: 0.8rem 0;
    }

    button[type="submit"] {
      transform: scale(1.3);
    }
  }
`;
const LoginForm = ({ onCancelModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeValue = useCallback(
    setState => e => {
      setState(e.target.value);
    },
    []
  );
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log(email, password);
      onCancelModal();
    },
    [email, password]
  );

  return (
    <StyledLoginForm>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChangeValue(setEmail)}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangeValue(setPassword)}
          placeholder="Password"
        />
        <Button htmlType="submit" ghost>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
