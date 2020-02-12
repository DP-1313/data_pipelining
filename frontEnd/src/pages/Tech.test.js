import React from "react";
import Architecture from "./Architecture.js";
import Algorithm from "./Algorithm.js";
import Resources from "./Resources.js";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 270px;
  background-color: #252529;
  color: #fff;
  font-family: "Open Sans", sans-serif;
`;
const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;
const SidebarMenuItem = styled.li`
  height: 40px;
  width: 100%;
`;
const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;
const SidebarMenuItemLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
`;

const tech = () => {
  return (
    <>
      <BrowserRouter>
        <SidebarContainer>
          <SidebarMenu>
            <SidebarMenuItem>
              <Icon></Icon>
              <SidebarMenuItemLabel>
                <div>
                  <div>
                    <ul>
                      <Link to="/technology/architecture">Architecture</Link>
                    </ul>
                  </div>

                  <div></div>
                </div>
              </SidebarMenuItemLabel>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Icon></Icon>
              <SidebarMenuItemLabel>
                <div>
                  <div>
                    <ul>
                      <Link to="/technology/algorithm">Algorithm</Link>
                    </ul>
                  </div>

                  <div></div>
                </div>
              </SidebarMenuItemLabel>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Icon></Icon>
              <SidebarMenuItemLabel>
                <div>
                  <div>
                    <ul>
                      <Link to="/technology/resources">Resources</Link>
                    </ul>
                  </div>

                  <div></div>
                </div>
              </SidebarMenuItemLabel>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContainer>
        <Route path="/technology/architecture" component={Architecture} />
        <Route path="/technology/algorithm" component={Algorithm} />
        <Route path="/technology/resources" component={Resources} />
      </BrowserRouter>
    </>
  );
};

export default tech;
