import React, { useState } from "react";
import "./AppNavbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup,
} from "reactstrap";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = ({
  handleDijkstra,
  handleClearPath,
  handleClearGrid,
  shortestNodes,
  handleVisualization,
  visitedNodes,
  handleDFS,
  handleBFS,
  handleAstar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Path Visualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Algorithms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleDijkstra();
                      handleVisualization();
                    }}
                  >
                    Dijkstra
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleDFS();
                      handleVisualization();
                    }}
                  >
                    DFS
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleBFS();
                      handleVisualization();
                    }}
                  >
                    BFS
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleAstar();
                      handleVisualization();
                    }}
                  >
                    A*
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavbarText>
          <ProgressBar
            visitedNodes={visitedNodes}
            shortestNodes={shortestNodes}
          />
        </NavbarText>
        <NavbarText className="clear-functions">
          <ButtonGroup>
            <Button onClick={handleClearPath}>Clear Path</Button>
            <Button onClick={handleClearGrid}>Clear Grid</Button>
          </ButtonGroup>
        </NavbarText>
        <NavbarText>
          <DarkModeToggle />
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
