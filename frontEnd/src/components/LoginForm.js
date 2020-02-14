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
const LoginForm = () => {
  return (
    <StyledLoginForm>
      <Form>
        <Input type="text" placeholder="ID" />
        <Input type="password" placeholder="Password" />
        <Button htmlType="submit" ghost>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
