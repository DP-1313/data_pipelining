import { useState, useCallback } from "react";
import { Menu, Row, Col, Layout, Modal, Button } from "antd";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;

    .ant-row {
      height: 100%;
    }
    .category-menu {
      line-height: 64px;
    }
  }
`;

const AppLayout = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const onClickLogin = useCallback(() => {
    setModalType("Login");
    setModalVisible(true);
  }, []);
  const onClickSignup = useCallback(() => {
    setModalType("Signup");
    setModalVisible(true);
  }, []);
  const onCancelModal = useCallback(() => {
    setModalVisible(false);
    setModalType("");
  }, []);

  return (
    <StyledLayout>
      <Header className="header">
        <Row>
          <Col push={1} xs={24} md={18}>
            <Menu mode="horizontal" theme="dark" className="category-menu">
              <Menu.Item> Home </Menu.Item>
              <Menu.Item> Technology </Menu.Item>
              <Menu.Item> RequestDemo </Menu.Item>
            </Menu>
          </Col>
          <Col push={3} xs={24} md={3}>
            <Menu mode="horizontal" theme="dark" className="category-menu">
              <Menu.Item onClick={onClickLogin}> Login </Menu.Item>
              <Menu.Item onClick={onClickSignup}> Signup </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Modal
        title={modalType}
        visible={modalVisible}
        onCancel={onCancelModal}
        footer={[<Button>제출하기</Button>]}
      >
        {modalType === "Login" && <LoginForm />}
        {modalType === "Signup" && <SignupForm />}
      </Modal>
      <Content>{children}</Content>
    </StyledLayout>
  );
};

export default AppLayout;
