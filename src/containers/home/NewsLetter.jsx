import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';

import NewsLetterForm from '../../components/home/NewsLettter_Form';

function NewsLetter() {
  const { image } = useSelector((state) => state.data.main.newsLetter);
  return (
    <Container
      fluid
      className="vh-100 my-5"
      style={{
        background: `url(/assets/images/newsLetter/${image}) no-repeat fixed`,
      }}
    >
      <NewsLetterForm />
    </Container>
  );
}

export default NewsLetter;
