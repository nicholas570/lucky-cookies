import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

import { Container } from 'react-bootstrap';

function CarouselComponent(props) {
  const { pics } = props;

  return (
    <Container fluid className="p-3 p-md-5">
      <Carousel>
        {pics.map((pic) => {
          return (
            <Carousel.Item key={pic.id}>
              <img
                className="d-block w-100 h-75"
                src={`/assets/images/caroussel/${pic.image}`}
                alt={pic.id}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

CarouselComponent.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselComponent;
