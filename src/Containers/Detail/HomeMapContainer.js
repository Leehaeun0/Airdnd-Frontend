import React from 'react';
import { useSelector } from 'react-redux';
import HomeMap from '../../Components/Detail/HomeMap';

const HomeMapContainer = ({ children, zoom }) => {
  const { location } = useSelector(state => state.home.homeState.home);

  return (
    <HomeMap zoom={zoom} location={location}>
      {children}
    </HomeMap>
  );
};

export default HomeMapContainer;
