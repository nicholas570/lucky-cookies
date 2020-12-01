import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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

import style from '../../css/home/Navbar.module.css';

function NavbarComponent() {
  const main = useSelector((state) => state.infos.data.main);
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="d-flex flex-row justify-content-around mt-5 mb-3 p-5"
        light
        expand="lg"
      >
        <NavbarText className="text-dark font-weight-bold d-none d-md-block">
          {main.motto}
        </NavbarText>
        <NavbarBrand className={style.decoration} href="/">
          <h2 className="font-weight-bold text-dark">{main.brand}</h2>
          <h6 className="font-weight-bold text-dark">{main.description}</h6>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="flex-grow-0" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="font-weight-bold" href="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold" href="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{
                    color: !isEmpty && 'red',
                  }}
                  icon={faShoppingCart}
                  onClick={() => setIsEmpty(!isEmpty)}
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
