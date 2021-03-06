import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { ShoppingCart } from '@material-ui/icons';
import './styles.css'
import { Badge } from '@material-ui/core';



const Index = ({totalItems}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar expand="md">
        <NavbarBrand href="/">
          The Halal Cart Amherst
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/ProductList">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SignUp">
                Sign Up
              </NavLink>
              </NavItem>
            <NavItem>
            <NavLink href="/Cart">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
              </NavLink>
            </NavItem>
              
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Index;