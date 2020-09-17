import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import Form from '../../components/contacts/ContactsForm';

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="light"
        className="font-weight-bold btn btn-outline-dark"
        onClick={handleShow}
      >
        CONTACT
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
