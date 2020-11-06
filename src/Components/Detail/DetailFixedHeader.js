import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import Rating from '../Global/Rating';

const DetailNav = ({
  clickNav,
  amenitiesRef,
  reviewsRef,
  locationRef,
  onClickReserveBtn,
  isScrollUnderBox,
  count,
  rating,
}) => {
  return (
    <StWrapper>
      <StHeader>
        <StHeaderWrapper>
          <StNavList>
            <StNav tabIndex="0" onClick={() => clickNav(0)}>
              사진
            </StNav>
            <StNav tabIndex="0" onClick={() => clickNav(amenitiesRef)}>
              편의시설
            </StNav>
            <StNav tabIndex="0" onClick={() => clickNav(reviewsRef)}>
              후기
            </StNav>
            <StNav tabIndex="0" onClick={() => clickNav(locationRef)}>
              위치
            </StNav>
          </StNavList>

          <StReserveWrapper isScrollUnderBox={isScrollUnderBox}>
            <StInfo>
              ₩40,000<span>/박</span>{' '}
              <Rating scale="1.2" rate={rating} count={count} />
            </StInfo>

            <StButton color="main" hover onClick={onClickReserveBtn}>
              예약하기
            </StButton>
          </StReserveWrapper>
        </StHeaderWrapper>
      </StHeader>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  height: 80px;
`;

const StHeader = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px;
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 2;
`;

const StHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

const StNavList = styled.ul`
  display: inline-block;
`;

const StNav = styled.li`
  display: inline-block;
  position: relative;
  padding: 30px 0px;
  margin-right: 24px;
  font-weight: 600;
  font-size: 14px;
  outline: none;

  ::after {
    background-color: ${({ theme }) => theme.color.black};
    content: '';
    display: block;
    bottom: 0px;
    height: 4px;
    opacity: 0;
    position: absolute;
    transition: all 0.2s ease 0s;
    width: 100%;
    transform: scaleX(0);
  }

  :hover {
    ::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const StReserveWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  transition: all 0.3s ease 0s;
  opacity: 0;

  ${({ isScrollUnderBox }) =>
    isScrollUnderBox &&
    css`
      opacity: 1;
    `}
`;

const StInfo = styled.div`
  margin-right: 16px;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.4rem;

  span {
    padding-left: 4px;
    color: ${({ theme }) => theme.color.darkGray};
    font-weight: 400;
    font-size: 14px;
  }

  & > div {
    display: flex;
  }
`;

const StButton = styled(Button)`
  padding: 1.4rem 2.4rem;
  border: none;
`;

export default DetailNav;
