import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent(props) {
  const { pics } = props;

  return (
    <Carousel className="m-5">
      {pics.map((pic) => {
        return (
          <Carousel.Item key={pic.id}>
            <img
              className="d-block w-100 h-75"
              src={`/assets/images/caroussel/${pic.image}`}
              alt="First slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

CarouselComponent.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarouselComponent;
