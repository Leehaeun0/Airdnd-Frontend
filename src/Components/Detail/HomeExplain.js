import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Profile from '../Global/Profile';

const HomeExplain = ({ isLoading, home }) => {
  const [readMore, setReadMore] = useState(false);
  const onClick = () => setReadMore(true);
  const randomNum = Math.ceil(Math.random() * 10000);

  return (
    <>
      <StSubTitDiv>
        <StTextWrapper>
          <StSubTitle isLoading={isLoading}>{home && home.subTitle}</StSubTitle>
          <StFeature isLoading={isLoading}>{home && home.feature}</StFeature>
        </StTextWrapper>
        {!isLoading && (
          <Profile
            mark
            isSupperhost={home.host.isSupperhost}
            profileImg={`https://loremflickr.com/320/240?random=${randomNum}`}
            // profileImg={home.host.profileImg}
            lastName={home.host.hostFirstName}
          />
        )}
      </StSubTitDiv>

      {!isLoading && (
        <>
          <StExplainList>
            {home.explains.map((explain, i) => (
              <StExplain key={i}>
                <svg
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={explain.icon} />
                </svg>
                <strong>{explain.text}</strong>
                {explain.subText && <span>{explain.subText}</span>}
              </StExplain>
            ))}
          </StExplainList>

          <StDescription readMore={readMore}>
            {/* <span>{home.description}</span> */}
            <span dangerouslySetInnerHTML={{ __html: home.description }}></span>
            {!readMore && <StMoreBtn onClick={onClick}>더 읽기</StMoreBtn>}
            <StToHostBtn>호스트에게 연락하기</StToHostBtn>
          </StDescription>
        </>
      )}
    </>
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

const line = () => 'border-bottom: 1px solid #DDDDDD;';

const StSubTitDiv = styled.div`
  padding-bottom: 2.4rem;
  ${line}
`;

const StTextWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 5.6rem);
`;

const StSubTitle = styled.h3`
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 36rem;
      height: 2.6rem;
      margin-bottom: 1.6rem;
      ${skeletonUi}
    `}
`;

const StFeature = styled.span`
  display: block;
  font-size: 1.6rem;
  line-height: 2rem;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 13rem;
      height: 1.6rem;
      margin-bottom: 20rem;
      ${skeletonUi}
    `}
`;

const StExplainList = styled.ul`
  padding: 32px 0;
  ${line}
`;

const StExplain = styled.li`
  margin-bottom: 2.4rem;

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  &:last-child {
    margin: 0;
  }

  svg {
    float: left;
    width: 2.4rem;
    margin-right: 16px;
    margin-bottom: 2rem;
    fill: currentColor;
  }

  strong {
    width: calc(100% - (2.4rem + 18px));
    float: left;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 0.4rem;
  }

  span {
    width: calc(100% - (2.4rem + 18px));
    float: left;
    font-size: 14px;
    line-height: 2rem;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StDescription = styled.div`
  padding: 32px 0 48px;
  ${line}

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2.4rem;

    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    word-wrap: break-word;

    ${({ readMore }) =>
      readMore &&
      css`
        -webkit-line-clamp: initial;
      `}
  }
`;

const underlineBtn = css`
  padding: 0;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: underline;
  border: none;
  border-radius: 0;
  outline: none;
`;

const StMoreBtn = styled.button`
  margin-top: 10px;
  ${underlineBtn}
`;

const StToHostBtn = styled.button`
  display: block;
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.color.darkGray};
  ${underlineBtn}

  &:hover {
    color: #222222;
  }
`;

export default HomeExplain;
