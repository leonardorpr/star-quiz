import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse,
} from 'reactstrap';
import { logo } from 'assets/brands';

import styles from './styles';

const Header = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <>
            <img src={logo} alt="Darth Vader brand" className="logo" />
            <span className="letter-logo">StarQuiz</span>
          </>
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(prevOpen => !prevOpen)} className="mr-2" />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link">Ranking</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default styles(Header);
