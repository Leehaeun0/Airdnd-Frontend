import React, { useState } from 'react';
import DetailMainContainer from '../Containers/Detail/DetailMainContainer';
import HomeFooter from '../Components/Detail/HomeFooter';
import DetailHeaderContainer from '../Containers/Detail/DetailHeaderContainer';

const DetailPage = () => {
  return (
    <>
      <DetailHeaderContainer />
      <main>
        <DetailMainContainer />
        <HomeFooter />
      </main>
    </>
  );
};

export default DetailPage;
