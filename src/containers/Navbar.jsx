import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import style from '../css/home/navbar.module.css';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="d-flex justify-content-around mt-5"
        color="light"
        light
        expand="md"
      >
        <NavbarToggler onClick={toggle} />
        <NavbarText className="text-dark ">Homemade, simply & daily</NavbarText>
        <NavbarBrand href="/">
          <h3 className="font-weight-bold text-dark">Lucky Cookies</h3>
          <NavbarText className="text-dark">
            Cookie bakery - Coffee shop
          </NavbarText>
        </NavbarBrand>
        <Collapse className={style.container} isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-dark" href="/components/">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
