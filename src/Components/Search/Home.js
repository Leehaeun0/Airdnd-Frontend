import React from 'react';
import styled, { css } from 'styled-components';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';
import CarouselContainer from '../../Containers/Global/CarouselContainer';

export const HomePrice = React.memo(({ type, price, dateDiff, theme }) => {
  return (
    <StPriceWrapper type={type}>
      <StLargePrice>
        <strong>₩{price.toLocaleString()}</strong> / 1박
      </StLargePrice>
      <StSmallPrice theme={theme}>
        총 요금: ₩{(dateDiff * price).toLocaleString()}
      </StSmallPrice>
    </StPriceWrapper>
  );
});

const Home = ({
  home,
  isHovered,
  onClickHeart,
  onHoverHome,
  onBlurHome,
  dateDiff,
  href,
}) => {
  const {
    homeId,
    isSuperhost,
    isBookmarked,
    imageArray,
    imageCount,
    subTitle,
    title,
    feature,
    rating,
    reviewCount,
    price,
  } = home;

  return (
    <StWrapper
      onMouseOver={() => onHoverHome(homeId)}
      onMouseLeave={onBlurHome}
    >
      <CarouselContainer
        size="large"
        homeId={homeId}
        isHovered={isHovered}
        imageArray={imageArray}
        imageCount={imageCount}
        isSuperhost={isSuperhost}
      />
      {/* <StHome href={`http://localhost:3000/detail/${homeId}`}> */}
      <StHome href={href}>
        <StDetailWrapper>
          <StDetail>{subTitle}</StDetail>
          <StTitle>{title}</StTitle>
          <StLine></StLine>
          <StDetail>{feature}</StDetail>
          <StRating
            scale="1.4"
            rate={rating}
            count={reviewCount}
            className="rating"
          />
          {dateDiff && (
            <HomePrice type="list" price={price} dateDiff={dateDiff} />
          )}
        </StDetailWrapper>
        <Heart ckType hover checked={isBookmarked} onCheck={onClickHeart} />
      </StHome>
    </StWrapper>
  );
};

const StWrapper = styled.li`
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.shadow};
  padding: 2rem 0;
  position: relative;
  display: flex;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
  }
`;

const StHome = styled.a`
  text-decoration: none;
  display: flex;
  width: calc(100% - 300px);
  position: relative;
`;

const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.7rem;
  position: relative;
  flex-grow: 1;
  width: calc(100% - 300px);
`;

const StRating = styled(Rating)`
  position: absolute;
  bottom: 0;
  left: 1.7rem;
`;

const StDetail = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.4rem;
  padding: 2px 0;
`;

const StTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  padding: 8px 0;
  width: 95%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StLine = styled.hr`
  width: 35px;
  margin-left: 0;
  text-align: left;
  border-width: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  margin-bottom: 9px;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
`;

const StPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: flex-end;

  ${({ type }) =>
    type === 'list' &&
    css`
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
    `}
`;

const StLargePrice = styled.span`
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
`;

const StSmallPrice = styled.span`
  text-decoration: underline;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

export default React.memo(Home);
