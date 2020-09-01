import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [main, setMain] = useState([]);

  const fetchData = async () => {
    await axios
      .get('/data.json')
      .then((res) => {
        setMain(res.data.main);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App">{main.brand}</div>;
}

export default App;
