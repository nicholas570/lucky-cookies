import React from 'react';
import PropTypes from 'prop-types';

function Where(props) {
  const { content } = props;
  return (
    <div className="text-left mb-5">
      <p>{content.where}</p>
      <br />
      <hr />
      <br />
      <p className="text-left font-italic">{content.whereFrench}</p>
      <br />
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
