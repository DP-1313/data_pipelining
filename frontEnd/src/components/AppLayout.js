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

      .ant-menu-item-selected {
        background: transparent;
      }
    }
    .category-menu {
      line-height: 64px;
    }
  }
`;

const StyledModal = styled(Modal)`
  top: 10rem;

  .ant-modal-content {
    opacity: 0.84;
    .ant-modal-header,
    .ant-modal-body,
    .ant-modal-footer {
      background-color: #2c3e50;
    }

    .ant-modal-title {
      color: white;
      text-align: center;
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 3rem;
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
      <StyledModal
        title={modalType}
        visible={modalVisible}
        onCancel={onCancelModal}
        footer={null}
      >
        {modalType === "Login" && <LoginForm onCancelModal={onCancelModal} />}
        {modalType === "Signup" && <SignupForm onCancelModal={onCancelModal} />}
      </StyledModal>
      <Content>{children}</Content>
    </StyledLayout>
  );
};

export default AppLayout;
