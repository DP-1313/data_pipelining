import { Form, Input, Button } from "antd";
import styled from "styled-components";

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

    button[type="submit"] {
      transform: scale(1.3);
    }
  }
`;

const SignupForm = () => {
  return (
    <StyledSignupForm>
      <Form>
        <Input type="email" name="userId" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" placeholder="Password Check" />
        <Input type="text" name="nickname" placeholder="Nickname" />
        <Button htmlType="submit" ghost>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </StyledSignupForm>
  );
};

export default SignupForm;
