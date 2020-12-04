import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from './redux';

import Router from './Routerz';

import './scss/app.scss';
import './css/general/App.css';
import Loader from './components/home/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.infos.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <div className="App">{isLoading ? <Loader /> : <Router />}</div>;
}

export default App;
