import React from "react";
import { Menu, Row, Col, Layout } from "antd";
import styled from "styled-components";
const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  .header {
    position: fixed;
    width: 100%;

    .ant-row {
      height: 100%;
    }
    .category-menu {
      line-height: 64px;
    }
  }
`;

const AppLayout = ({ children }) => {
  return (
    <StyledLayout>
      <Header className="header">
        <Row>
          <Col push={1} xs={24} md={18}>
            <Menu
              mode="horizontal"
              theme="dark"
              className="category-menu"
              selectable={false}
            >
              <Menu.Item> Home </Menu.Item>
              <Menu.Item> Technology </Menu.Item>
              <Menu.Item> RequestDemo </Menu.Item>
            </Menu>
          </Col>
          <Col push={3} xs={24} md={3}>
            <Menu mode="horizontal" theme="dark" className="category-menu">
              <Menu.Item> Login </Menu.Item>
              <Menu.Item> Signup </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
    </StyledLayout>
  );
};

export default AppLayout;
