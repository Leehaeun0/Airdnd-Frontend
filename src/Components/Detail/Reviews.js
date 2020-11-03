import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Division from './Division';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
import { setScrollLocationY } from '../../Modules/home';

const Reviews = ({ home }) => {
  const {
    cleanliness,
    accuracy,
    communication,
    location,
    checkin,
    value,
    count,
    rating,
    comments,
  } = home.reviews;

  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScrollLocationY('reviewsRef', ref.current));
  }, []);

  const addDecimal = num => {
    return (num + '').length === 1 ? num + '.0' : num;
  };

  const onClick = () => {
    console.log(ref.current);
    ref.current.scrollIntoView();
  };

  return (
    <Division
      sentRef={ref}
      title={
        <Rating
          scale="2.2"
          starSize="2.2rem"
          rate={`${rating}점`}
          count={`후기 ${count}개`}
        />
      }
    >
      <div style={{ marginBottom: '24px' }}>
        <StEstimation percent={cleanliness * 20}>
          <span onClick={onClick}>청결도</span>
          <div aria-label={`5점 만점에 ${cleanliness}점`}>
            <div />
          </div>
          <span>{addDecimal(cleanliness)}</span>
        </StEstimation>
        <StEstimation percent={accuracy * 20}>
          <span>정확성</span>
          <div aria-label={`5점 만점에 ${accuracy}점`}>
            <div />
          </div>
          <span>{addDecimal(accuracy)}</span>
        </StEstimation>
        <StEstimation percent={communication * 20}>
          <span>의사소통</span>
          <div aria-label={`5점 만점에 ${communication}점`}>
            <div />
          </div>
          <span>{addDecimal(communication)}</span>
        </StEstimation>
        <StEstimation percent={location * 20}>
          <span>위치</span>
          <div aria-label={`5점 만점에 ${location}점`}>
            <div />
          </div>
          <span>{addDecimal(location)}</span>
        </StEstimation>
        <StEstimation percent={checkin * 20}>
          <span>체크인</span>
          <div aria-label={`5점 만점에 ${checkin}점`}>
            <div />
          </div>
          <span>{addDecimal(checkin)}</span>
        </StEstimation>
        <StEstimation percent={value * 20}>
          <span>가격 대비 만족도</span>
          <div aria-label={`5점 만점에 ${value}점`}>
            <div />
          </div>
          <span>{addDecimal(value)}</span>
        </StEstimation>
      </div>
      <ul>
        {comments.map((comment, i) => {
          if (i > 5) return;
          const randomNum = Math.ceil(Math.random() * 10000);
          return (
            <StReview key={i}>
              <StRiviewer>
                <Profile
                  lastName={comment.userFirstName}
                  // profileImg={comment.userProfileImg}
                  profileImg={`https://loremflickr.com/320/240?random=${randomNum}`}
                />
                <div>
                  {comment.userFirstName}
                  <div>{comment.date}</div>
                </div>
              </StRiviewer>
              <p>{comment.contents}</p>
            </StReview>
          );
        })}
      </ul>
      <Button padding="13px 23px" transition>
        후기 5개 모두 보기
      </Button>
    </Division>
  );
};

const StEstimation = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
  margin-right: 8%;
  margin-bottom: 16px;

  span:first-child {
    flex-grow: 1;
  }

  div {
    position: relative;
    max-width: 125px;
    width: 40%;
    height: 4px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #ddd;

    div {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 125px;
      width: ${props => props.percent || 3.5}%;
      height: 4px;
      border-radius: 4px;
      background-color: #000;
    }
  }

  span:last-child {
    margin-left: 9px;
    font-size: 12px;
    font-weight: 600;
  }
`;

const StReview = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 42%;
  margin-right: 8%;
  margin-bottom: 48px;

  p {
    line-height: 2.4rem;
    overflow: hidden;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    /* word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; */
  }

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
    margin-right: 0;
  }
`;

const StRiviewer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  line-height: 2rem;

  & > div {
    margin-left: 12px;
    font-weight: 600;

    div {
      color: ${({ theme }) => theme.color.darkGray};
      font-weight: 400;
      font-size: 14px;
    }
  }

  & > a {
    min-width: 5.6rem;
  }
`;

export default Reviews;
