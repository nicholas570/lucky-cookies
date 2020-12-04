import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div
      style={{ height: '100vh' }}
      className="vw-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
