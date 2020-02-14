import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

import { signupRequest } from "../reducers/user";

const StyledSignupForm = styled.div`
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

    .password-error,
    .error-reason {
      color: red;
    }

    button[type="submit"] {
      transform: scale(1.3);
    }
  }
`;

const SignupForm = ({ onCancelModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [nickname, setNickname] = useState("");
  const { isSigningUp, signupErrorReason } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onChangeValue = useCallback(
    setState => e => {
      setState(e.target.value);
    },
    []
  );
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(false);
      if (password !== e.target.value) return setPasswordError(true);
    },
    [password]
  );

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) return;
      dispatch(signupRequest(email, password, nickname, onCancelModal));
    },
    [email, password, passwordCheck, nickname]
  );
  return (
    <StyledSignupForm>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="email"
          name="userId"
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
        <Input
          type="password"
          placeholder="Password Check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        <Input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChangeValue(setNickname)}
          placeholder="Nickname"
        />
        {passwordError && (
          <div className="password-error">
            {" "}
            Password is not equal to check value{" "}
          </div>
        )}
        {signupErrorReason && (
          <div className="error-reason">{signupErrorReason}</div>
        )}
        <Button htmlType="submit" loading={isSigningUp} ghost>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </StyledSignupForm>
  );
};

export default SignupForm;
