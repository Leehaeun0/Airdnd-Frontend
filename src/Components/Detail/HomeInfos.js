import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import HomeExplain from './HomeExplain';
import Bedrooms from './Bedrooms';
import Amenities from './Amenities';
import ScheduleContainer from '../../Containers/Detail/ScheduleContainer';
import ReservationBoxContainer from '../../Containers/Detail/ReservationBoxContainer';
import { setScrollLocationY } from '../../Modules/home';

const HomeInfos = ({ isLoading, home, isScreenMedium }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScrollLocationY('homeInfosRef', ref.current));
  }, []);

  return (
    <StHomeInfos ref={ref}>
      <StInfosWrapper>
        <HomeExplain isLoading={isLoading} home={home} />
        {!isLoading && (
          <>
            <Bedrooms home={home} />
            <Amenities home={home} isScreenMedium={isScreenMedium} />
            <ScheduleContainer />
          </>
        )}
      </StInfosWrapper>
      {!isLoading && <ReservationBoxContainer home={home} />}
    </StHomeInfos>
  );
};

const StHomeInfos = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

const StInfosWrapper = styled.div`
  width: 58%;
  padding-top: 48px;
`;

export default HomeInfos;
