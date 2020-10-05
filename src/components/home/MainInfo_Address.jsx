import React from 'react';
import { useSelector } from 'react-redux';

function Address() {
  const address = useSelector((state) => state.data.main.address);

  return (
    <div className="mt-3 mt-md-0">
      <p className="font-weight-bold mb-3">Address</p>
      <p>{address.street}</p>
      <p>{`${address.zip} ${address.city}`}</p>
    </div>
  );
}

export default Address;
