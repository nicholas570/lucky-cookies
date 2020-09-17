import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Router from './Routerz';

import './scss/app.scss';
import './css/general/App.css';

function App() {
  const [main, setMain] = useState([]);
  const [content, setContent] = useState([]);
  const [shop, setShop] = useState([]);
  const [goods, setGoods] = useState([]);
  const [pics, setPics] = useState([]);
  const [offers, setOffers] = useState([]);
  const [address, setAddress] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [newsLetter, setNewsLetter] = useState([]);
  const [partners, setPartners] = useState([]);
  const [menu, setMenu] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    await axios
      .get('/data.json')
      .then((res) => {
        setMain(res.data.main);
        setContent(res.data.content);
        setShop(res.data.shop);
        setGoods(res.data.goods);
        setPics(res.data.pics_carousel);
        setOffers(res.data.offers);
        setAddress(res.data.address);
        setContacts(res.data.contacts);
        setOpenings(res.data.openings);
        setNewsLetter(res.data.newsLetter);
        setPartners(res.data.partners);
        setMenu(res.data.menu);
        setSnacks(res.data.menu.snacks);
        setMainCourses(res.data.menu.mainCourses);
        setDesserts(res.data.menu.desserts);
        setDrinks(res.data.menu.drinks);
        setJobs(res.data.jobs);
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
        offers={offers}
        address={address}
        contacts={contacts}
        openings={openings}
        newsLetter={newsLetter}
        partners={partners}
        menu={menu}
        snacks={snacks}
        mainCourses={mainCourses}
        desserts={desserts}
        drinks={drinks}
        jobs={jobs}
      />
    </div>
  );
}

export default App;
