import React from 'react';
import { useSelector } from 'react-redux';

function Info() {
  const address = useSelector((state) => state.data.main.address);
  const openings = useSelector((state) => state.data.main.openings);
  const contacts = useSelector((state) => state.data.main.contacts);

  return (
    <div className="text-left mb-5">
      {
        (address,
        openings,
        contacts && (
          <>
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
          </>
        ))
      }
    </div>
  );
}

export default Info;
