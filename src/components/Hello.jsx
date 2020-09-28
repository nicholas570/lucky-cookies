import React from 'react';
import { useSelector } from 'react-redux';

function Hello() {
  const main = useSelector((state) => state.data.main);

  return (
    <>
      {main && (
        <div>
          hello
          {main.brand}
        </div>
      )}
    </>
  );
}

export default Hello;
