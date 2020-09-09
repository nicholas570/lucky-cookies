import React from 'react';

import Container from 'react-bootstrap/Container';

function Iframe() {
  return (
    <Container fluid className="p-5 my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21729.39819492114!2d-1.571270431774628!3d47.20750272562932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeab92ff183d%3A0x929630331c7ea7cb!2s2%20Rue%20Louis%20Blanc%2C%2044200%20Nantes!5e0!3m2!1sfr!2sfr!4v1599676441708!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        title="location"
      />
    </Container>
  );
}

export default Iframe;
