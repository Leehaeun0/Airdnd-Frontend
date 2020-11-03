import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews';
import HomeLocation from './HomeLocation';
import HostInfo from './HostInfo';
import HomeNotice from './HomeNotice';

const FullsizeWrapper = ({ home }) => {
  return (
    <StWrapper>
      <Reviews home={home} />
      <HomeLocation home={home} />
      <HostInfo home={home} />
      <HomeNotice home={home} />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

export default FullsizeWrapper;
