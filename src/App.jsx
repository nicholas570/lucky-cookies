import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, fetchCart } from './redux';

import Router from './Routerz';

import './scss/app.scss';
import './css/general/App.css';
import Loader from './components/home/Loader';

const id = 3;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.infos.loading);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCart(id));
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Router />}</div>;
}

export default App;
