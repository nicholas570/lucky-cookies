import React from 'react';

import Carousel from '../components/home/Carousel';
import MainInfo from '../containers/home/MainInfo';
import Pics from '../containers/home/Pics';
import Content from '../containers/home/Content';
import NewsLetter from '../containers/home/NewsLetter';
import Location from '../containers/home/Location';
import Iframe from '../containers/home/Iframe';
import FindUs from '../containers/home/FindUs';

function Home() {
  return (
    <>
      <Carousel />
      <MainInfo />
      <Pics />
      <Content />
      <NewsLetter />
      <Location />
      <Iframe />
      <FindUs />
    </>
  );
}

export default Home;
