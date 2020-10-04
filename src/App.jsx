import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from './redux';

import Router from './Routerz';

import './scss/app.scss';
import './css/general/App.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <div className="App">{!isLoading && <Router />}</div>;
}

export default App;
