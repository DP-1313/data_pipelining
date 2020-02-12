import React, { Component } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  width: 270px;
  background-color: #252529;
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

const SidebarMenuItem = styled.li`
  width: 100%;
`;
const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;
const SidebarMenuItemLabel = styled.p`
  margin-top: 0;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  color: #ffffff;
`;

class Sidebar extends Component {
  render() {
    return <div />;
  }
}

export default Sidebar;
