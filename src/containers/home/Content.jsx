import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import Slogan from '../../components/home/Slogan';
import TextContent from '../../components/home/TextContent';

function Content(props) {
  const { content } = props;

  return (
    <Container className="d-flex flex-column flex-md-row mt-5 pb-5">
      <Slogan content={content} />
      <TextContent content={content} />
    </Container>
  );
}

Content.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Content;
