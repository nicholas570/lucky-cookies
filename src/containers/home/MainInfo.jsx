import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Offers from '../../components/home/MainInfo_Offers';
import Address from '../../components/home/MainInfo_Address';
import Contacts from '../../components/home/MainInfo_Contacts';

function MainInfo() {
  return (
    <Jumbotron fluid>
      <Container className="d-flex flex-column flex-md-row justify-content-around">
        <Address />
        <Offers />
        <Contacts />
      </Container>
    </Jumbotron>
  );
}

export default MainInfo;
