import { useState, useCallback } from "react";
import { Menu, Row, Col, Layout, Modal } from "antd";
import { useSelector } from "react-redux";
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
    .menu {
      line-height: 64px;
      font-size: 1.13rem;
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
  const [modalType, setModalType] = useState("");
  const { userInfo } = useSelector(state => state.user);

  const onClickSign = useCallback(
    type => () => {
      setModalType(type);
    },
    []
  );
  const onCancelModal = useCallback(() => {
    setModalType("");
  }, []);

  return (
    <StyledLayout>
      <Header className="header">
        <Row>
          <Col push={1} xs={24} md={18}>
            <Menu mode="horizontal" theme="dark" className="menu">
              <Menu.Item> Home </Menu.Item>
              <Menu.Item> Technology </Menu.Item>
              <Menu.Item> RequestDemo </Menu.Item>
            </Menu>
          </Col>
          <Col push={3} xs={24} md={6}>
            <Menu mode="horizontal" theme="dark" className="menu">
              {userInfo ? (
                <Menu.Item> Welcome {userInfo.nickname} </Menu.Item>
              ) : (
                [
                  <Menu.Item key="login" onClick={onClickSign("Login")}>
                    {" "}
                    Login{" "}
                  </Menu.Item>,
                  <Menu.Item key="signup" onClick={onClickSign("Signup")}>
                    {" "}
                    Signup{" "}
                  </Menu.Item>
                ]
              )}
            </Menu>
          </Col>
        </Row>
      </Header>
      <StyledModal
        title={modalType}
        visible={!!modalType}
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
