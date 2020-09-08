import React from 'react';
import PropTypes from 'prop-types';

function Content(props) {
  const {
    content: { location },
  } = props;
  return (
    <div>
      <p className="text-left">{location}</p>
      <br />
      <a href="https://www.google.com/maps/@47.2330812,-1.5506858,15z">
        <p className="font-italic text-dark text-left">Get directions</p>
      </a>
    </div>
  );
}

Content.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default Content;
