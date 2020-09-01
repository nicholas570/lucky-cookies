import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [main, setMain] = useState([]);
  const [content, setContent] = useState([]);
  const [shop, setShop] = useState([]);
  const [goods, setGoods] = useState([]);

  const fetchData = async () => {
    await axios
      .get('/data.json')
      .then((res) => {
        setMain(res.data.main);
        setContent(res.data.content);
        setShop(res.data.shop);
        setGoods(res.data.goods);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="App"
      main={main}
      content={content}
      shop={shop}
      goods={goods}
    />
  );
}

export default App;
