import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import NewsLetterForm from '../../components/home/NewsLettter_Form';

function NewsLetter({ newsLetter }) {
  return (
    <Container
      fluid
      className="vh-100 my-5"
      style={{
        background: `url(/assets/images/newsLetter/${newsLetter.image}) no-repeat fixed`,
      }}
    >
      <NewsLetterForm />
    </Container>
  );
}

NewsLetter.propTypes = {
  newsLetter: PropTypes.shape.isRequired,
};

export default NewsLetter;
