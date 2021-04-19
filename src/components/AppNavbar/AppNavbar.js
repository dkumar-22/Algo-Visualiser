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
  const [algo,setAlgo] = useState("");
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="sn" href="/">
          Path Visualizer
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="sn">
                Algorithms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleDijkstra();
                      handleVisualization();
                      setAlgo("Dijkstra")
                    }}
                    className="sn"
                  >
                    Dijkstra
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleDFS();
                      handleVisualization();
                      setAlgo("DFS")
                    }}
                    className="sn"
                  >
                    DFS
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleBFS();
                      handleVisualization();
                      setAlgo("BFS")
                    }}
                    className="sn"
                  >
                    BFS
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    onClick={() => {
                      handleAstar();
                      handleVisualization();
                      setAlgo("A*")
                    }}
                    className="sn"
                  >
                    A*
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarBrand className="sn nt"><b style={{color:"white"}}>{algo}</b></NavbarBrand>
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
            <Button onClick={handleClearPath} className="btnl sn">
              Clear Path
            </Button>
            <Button onClick={handleClearGrid} className="sn">
              Clear Grid
            </Button>
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
