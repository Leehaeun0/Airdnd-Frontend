import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { FaCrown } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import HomePhotos from './HomePhotos';
import { Heart } from '../Global/Heart';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const Subject = ({ isLoading, home }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClickBookmark = () => toggleBookmark(isLoggedIn, home, dispatch);
  const isBookmarked = home && home.isBookmarked;
  console.log(isBookmarked, typeof isBookmarked);

  return (
    <StDetailTitle>
      <StH2 isLoading={isLoading}>{home && home.title}</StH2>
      <StLinkWrapper isLoading={isLoading}>
        {!isLoading && (
          <>
            <Rating
              scale="1.4"
              rate={home.reviews.rating}
              count={home.reviews.count}
            />
            {home.host.isSupperhost && (
              <>
                <StDot>·</StDot>
                <StSuperHost>
                  <FaCrown style={{ color: '#FF385C' }} />
                  <span>슈퍼호스트</span>
                </StSuperHost>
              </>
            )}
            <StDot>·</StDot>
            <StLocationLink>{home.address}</StLocationLink>
            <StButton transition>
              <FiShare />
              공유하기
            </StButton>
            <StButton transition onClick={onClickBookmark}>
              <StHeart
                size="smaller"
                bgColor={isBookmarked ? 'main' : 'white'}
                stroke={isBookmarked ? 'main' : 'black'}
              />
              저장
            </StButton>
          </>
        )}
      </StLinkWrapper>
      <HomePhotos isLoading={isLoading} home={home} />
    </StDetailTitle>
  );
};

const skeleton = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.3;
  }
`;

const skeletonUi = css`
  background-color: currentColor;
  animation-name: ${skeleton};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

const inlineFlex = css`
  display: inline-flex;
  align-items: center;
`;

const StDetailTitle = styled.section`
  max-width: 1200px;
  padding: 0 40px;
  padding-top: 2.4rem;
  margin: 0 auto;
`;

const StH2 = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2.6rem;
  line-height: 3rem;
  font-weight: 600;
  word-break: break-word;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 48rem;
      height: 3rem;
      ${skeletonUi}
    `}
`;

const StLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  font-size: 14px;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 32rem;
      height: 16px;
      margin-top: 1.6rem;
      margin-bottom: 2.2rem;
      ${skeletonUi};
    `}
`;

const StDot = styled.span`
  margin: 0 8px;
`;

const StSuperHost = styled.span`
  ${inlineFlex}
  color: ${({ theme }) => theme.size.darkGray};
  
  & svg {
    margin-right: 4px;
  }
`;

const StLocationLink = styled.a`
  flex-grow: 1;
  color: ${({ theme }) => theme.size.darkGray};
  text-decoration: underline;
`;

const StButton = styled(Button)`
  border: none;
  padding: 0.8rem;
  font-size: 14px;
  text-decoration: underline;
  /* font-weight: 500; */

  & svg {
    margin-right: 8px;
  }
`;

const StHeart = styled(Heart)`
  height: 16px;
`;

export default React.memo(Subject);
