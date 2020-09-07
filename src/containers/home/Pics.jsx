import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Pics() {
  return (
    <Container className="d-flex flex-column flex-md-row my-5 pt-5">
      <Image
        className="mr-md-5 mb-5 mt-5 h-50"
        src="/assets/images/home/chairs.jpg"
      />
      <Image className="ml-md-5" src="/assets/images/home/coffeeBean.jpg" />
    </Container>
  );
}

export default Pics;
