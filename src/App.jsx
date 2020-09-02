import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Router from './Routerz';

import './scss/app.scss';
import './App.css';

function App() {
  const [main, setMain] = useState([]);
  const [content, setContent] = useState([]);
  const [shop, setShop] = useState([]);
  const [goods, setGoods] = useState([]);
  const [pics, setPics] = useState([]);

  const fetchData = async () => {
    await axios
      .get('/data.json')
      .then((res) => {
        setMain(res.data.main);
        setContent(res.data.content);
        setShop(res.data.shop);
        setGoods(res.data.shop.goods);
        setPics(res.data.pics_carousel);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router
        main={main}
        content={content}
        shop={shop}
        goods={goods}
        pics={pics}
      />
    </div>
  );
}

export default App;
