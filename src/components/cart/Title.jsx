import React from 'react';

import { Container, Row } from 'react-bootstrap';

function Title() {
  return (
    <Container>
      <Row>
        <h2 className="font-weight-light text-left text-muted ml-3 ml-md-0">
          SHOPPING CART
        </h2>
      </Row>
    </Container>
  );
}

export default Title;
