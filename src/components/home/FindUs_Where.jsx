import React from 'react';
import PropTypes from 'prop-types';

function Where(props) {
  const { content } = props;
  return (
    <div className="text-left my-5">
      <p className="font-weight-bold mb-5">Where to find us?</p>
      <p>{content.where}</p>
      <a href="https://www.facebook.com/" className="text-dark font-italic">
        Facebook
      </a>
      {'  '}
      <a
        href="https://www.instagram.com/"
        className="text-dark font-italic ml-3"
      >
        Instagram
      </a>
    </div>
  );
}

Where.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Where;
