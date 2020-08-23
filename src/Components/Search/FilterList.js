import React from 'react';
import Button from '../Global/Button';
import styled from 'styled-components';
import FilterModal from './FilterModal';
import { FilterButtonContainer } from '../../Containers/Search/FilterListContainer';
import { MapButton } from './MapButton';
import {
  RefundPopupContainer,
  RoomTypePopupContainer,
  PricePopupContainer,
  SetDatePopupContainer,
} from '../../Containers/Search/FilterPopupContainer';
import FilterModalContainer from '../../Containers/Search/FilterModalContainer';

export const FilterButton = ({ children, text, onClick }) => {
  return (
    <StFilterWrapper>
      <FilterBtn btnType="oval" onClick={onClick}>
        {text}
      </FilterBtn>
      {children}
    </StFilterWrapper>
  );
};

export const FilterList = ({
  popupState,
  mapState,
  onShowMap,
  dispatch,
  dateDiff,
}) => {
  return (
    <StWrapper>
      <FilterButtonContainer
        name="refund"
        text="유연한 환불 정책"
        popupState={popupState}
        dispatch={dispatch}
      >
        <RefundPopupContainer size="350px" />
      </FilterButtonContainer>
      <FilterButtonContainer
        name="roomType"
        text="숙소 유형"
        popupState={popupState}
        dispatch={dispatch}
      >
        <RoomTypePopupContainer size="365px" />
      </FilterButtonContainer>
      <FilterButtonContainer
        name="price"
        text="요금"
        popupState={popupState}
        dispatch={dispatch}
      >
        {dateDiff ? (
          <PricePopupContainer size="430px" />
        ) : (
          <SetDatePopupContainer size="350px" />
        )}
      </FilterButtonContainer>
      <FilterButtonContainer
        name="modal"
        text="필터 추가하기"
        popupState={popupState}
        dispatch={dispatch}
      >
        <FilterModalContainer />
      </FilterButtonContainer>
      <MapButton mapState={mapState} onShowMap={onShowMap} />
    </StWrapper>
  );
};

const FilterBtn = styled(Button)`
  margin-right: 1rem;
  font-size: 14px;
`;

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 0 2rem;
`;

const StFilterWrapper = styled.div`
  position: relative;
`;
