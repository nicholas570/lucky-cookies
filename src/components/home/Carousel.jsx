import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Carousel } from 'react-bootstrap';

function CarouselComponent() {
  const images = useSelector((state) => state.data.carousel);

  return (
    <Container fluid className="p-3 p-md-5">
      {images && (
        <Carousel>
          {images.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100 h-75"
                  src={`/assets/images/caroussel/${item.image}`}
                  alt={item.id}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </Container>
  );
}

export default CarouselComponent;
