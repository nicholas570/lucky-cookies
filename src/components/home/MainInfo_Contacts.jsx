import React from 'react';
import { useSelector } from 'react-redux';

function Contacts() {
  const contacts = useSelector((state) => state.data.main.contacts);

  return (
    <div className="mt-3 mt-md-0">
      {contacts && (
        <>
          <p className="font-weight-bold mb-3">Contacts</p>
          <p>{contacts.phone}</p>
          <p>{contacts.mail}</p>
        </>
      )}
    </div>
  );
}

export default Contacts;
