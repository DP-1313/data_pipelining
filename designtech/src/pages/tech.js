import React from 'react';
import ReactDOM from 'react-dom';
import Architecture from './Architecture.js';
import Algorithm from './Algorithm.js';
import Resources from './Resources.js';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const SidebarContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 270px;
        background-color: #252529;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
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
	return(
	<>
	<Router>
	<SidebarContainer>
		<SidebarMenu>
			<SidebarMenuItem>
			<Icon></Icon>
			<SidebarMenuItemLabel>
			<div>
				<div>
				<ul>
				<Link to="Architecture">Architecture</Link>
				</ul>
				</div>
					
				<div>
				<Route path="Architecture" component={ Architecture }/>
				</div>
			</div>
			</SidebarMenuItemLabel>
			</SidebarMenuItem>

			<SidebarMenuItem>
			<Icon></Icon>
			<SidebarMenuItemLabel>
			<div>
				<div>
				<ul>
				<Link to="Algorithm">Algorithm</Link>
				</ul>
				</div>

				<div>
				<Route path="Algorithm" component={ Algorithm }/>
				</div>
			</div>
			</SidebarMenuItemLabel>
			</SidebarMenuItem>

			<SidebarMenuItem>
			<Icon></Icon>
			<SidebarMenuItemLabel>
			<div>
				<div>
				<ul>
				<Link to="Resources">Resources</Link>
				</ul>
				</div>

				<div>
				<Route path="Resources" component={ Resources }/>
				</div>
			</div>
			</SidebarMenuItemLabel>
			</SidebarMenuItem>
		</SidebarMenu>
	</SidebarContainer>
	</Router>
	</>
	);
};

export default tech;
