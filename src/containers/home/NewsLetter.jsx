import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import NewsLetterForm from '../../components/home/NewsLettter_Form';

function NewsLetter(props) {
  const { newsLetter } = props;
  return (
    <Container
      fluid
      className="vh-100 mt-5"
      style={{
        background: `url(/assets/images/newsLetter/${newsLetter.image}) no-repeat`,
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
