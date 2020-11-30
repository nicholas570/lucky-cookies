import React from 'react';
import { useSelector } from 'react-redux';

function Info() {
  const { address, openings, contacts } = useSelector(
    (state) => state.infos.data.main
  );

  return (
    <div className="text-left mb-5">
      <p className="font-weight-bold">Address</p>
      <br />
      <p>{address.place}</p>
      <p>{address.street}</p>
      <p>{`${address.zip} ${address.city}`}</p>
      <br />
      <p>{openings.days}</p>
      <p>{openings.hours}</p>
      <br />
      <p>{contacts.phone}</p>
      <p>{contacts.mail}</p>
      <br />
      <br />
      <p className="font-weight-bold">Summer closure</p>
      <p className="font-weight-bold">{openings.vacations}</p>
    </div>
  );
}

export default Info;
