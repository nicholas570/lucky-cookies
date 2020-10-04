import React from 'react';
import { useSelector } from 'react-redux';

function Offers() {
  const offers = useSelector((state) => state.data.main.offers);
  return (
    <div className="my-5 mt-md-0">
      {offers &&
        offers.map((offer) => {
          return (
            <p className="font-weight-bold m-0" key={offer.id}>
              {offer.name}
            </p>
          );
        })}
    </div>
  );
}

export default Offers;
