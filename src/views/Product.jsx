import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Spinner from 'react-bootstrap/Spinner';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Block from '../containers/product/Block';

function Product({ main, address }) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    await axios
      .get('/data.json')
      .then(({ data }) => {
        setProduct(data.goods[id]);
        setIsLoading(false);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar main={main} />
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Block product={product} />
      )}

      <Footer main={main} address={address} />
    </div>
  );
}

Product.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
};

export default Product;
