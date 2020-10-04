import React from 'react';
import { useSelector } from 'react-redux';

function Rules() {
  const { shop } = useSelector((state) => state.data.shop);
  return (
    <div className="mb-5">
      <p className="font-weight-bold text-left mb-3">
        Lucky Cookies est un coffee shop spécialiste des cookies.
      </p>
      <p className="text-left">{shop.description}</p>
    </div>
  );
}

export default Rules;
