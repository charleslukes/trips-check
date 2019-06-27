import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './nav.css';
// import Trips from '../trips';
// import DriverD from '../driverD'

function NavBar() {
  const [dashState, dashUseState] = useState({ isOpen: false });

  const toggle = () => {
    dashUseState({ isOpen: !dashState.isOpen });
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Drivers DashBoard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={dashState.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="../trips/">Trips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../driverD/">Driver Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/charleslukes">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
