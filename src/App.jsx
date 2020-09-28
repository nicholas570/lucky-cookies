import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';

import { fetchData } from './redux';

// import Router from './Routerz';
import Hello from './components/Hello';

import './scss/app.scss';
import './css/general/App.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Hello />
      )}

      {/* <Router /> */}
    </div>
  );
}

export default App;
