import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse,
} from 'reactstrap';
import { logo } from 'assets/brands';

import styles from './styles';

const Header = ({ className, pushToRoute }) => {
  const [open, setOpen] = useState(false);

  const redirectToRoute = route => pushToRoute(`/${route}`);

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
            <NavItem onClick={() => redirectToRoute('')}>
              <NavLink className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem onClick={() => redirectToRoute('about')}>
              <NavLink className="nav-link">About</NavLink>
            </NavItem>
            <NavItem onClick={() => redirectToRoute('ranking')}>
              <NavLink className="nav-link">Ranking</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  pushToRoute: bindActionCreators(push, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(styles(Header));
