import React from 'react';
import styled, { css } from 'styled-components';
import { FaCrown } from 'react-icons/fa';
import { AiFillStar, AiFillSafetyCertificate } from 'react-icons/ai';
import Division from './Division';
import Profile from '../Global/Profile';
import Button from '../Global/Button';

const HostInfo = ({ home }) => {
  const {
    hostFirstName,
    isSupperhost,
    signupDate,
    reviewCount,
    identityVerified,
    selfExplanation,
    communication,
    responseRate,
    responseTime,
  } = home.host;

  const randomNum = Math.ceil(Math.random() * 10000);

  return (
    <Division>
      <StHostWrapper>
        <Profile
          isSupperhost={isSupperhost}
          mark
          profileImg={`https://loremflickr.com/320/240?random=${randomNum}`}
        />
        <div>
          <h3>호스트: {hostFirstName}님</h3>
          <span>회원 가입일: {signupDate}</span>
        </div>
      </StHostWrapper>
      <StInfoWrapper notContent={!selfExplanation && !communication}>
        <StMarkList>
          {!!reviewCount && (
            <li>
              <AiFillStar />
              후기 {reviewCount}개
            </li>
          )}
          {identityVerified && (
            <li>
              <FaCrown />
              본인 인증 완료
            </li>
          )}
          {isSupperhost && (
            <li>
              <AiFillSafetyCertificate />
              슈퍼호스트
            </li>
          )}
        </StMarkList>
        {selfExplanation && <span>{selfExplanation}</span>}
        {communication && (
          <>
            <strong>숙박 중 게스트와의 교류</strong>
            <span>{communication}</span>
          </>
        )}
        {isSupperhost && (
          <>
            <strong>제주도님은 슈퍼호스트입니다.</strong>
            <span>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </span>
          </>
        )}
      </StInfoWrapper>
      <StSafetyWrapper>
        {responseRate && <span>응답률: {responseRate}</span>}
        {responseTime && <span>응답시간: {responseTime}</span>}
        <span>언어: 한국어</span>
        <Button padding="13px 23px" transition>
          호스트에게 연락하기
        </Button>
        <StWarnWrapper>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"></path>
            <path
              d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
              fill="#484848"
            ></path>
          </svg>
          <em>
            안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
            대화를 나누지 마세요.
          </em>
        </StWarnWrapper>
      </StSafetyWrapper>
    </Division>
  );
};

const StHostWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  div {
    margin-left: 16px;
  }

  h3 {
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.6rem;
  }

  span {
    font-size: 14px;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StMarkList = styled.ul`
  li {
    /* display: inline-block; */
    display: inline-flex;
    align-items: center;
    margin: 0 24px 24px 0;
  }

  li:nth-of-type(1) svg {
    font-size: 18px;
    /* vertical-align: bottom; */
  }

  svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.color.main};
  }
`;

const StInfoWrapper = styled.div`
  display: inline-block;
  width: 42%;
  margin-right: 8%;
  vertical-align: top;
  line-height: 24px;

  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }
  span {
    display: block;
    margin-bottom: 24px;
  }

  ${({ notContent }) =>
    notContent &&
    css`
      display: block;
    `}
`;

const StSafetyWrapper = styled.div`
  display: inline-block;
  width: 50%;
  vertical-align: top;

  > span {
    display: block;
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 32px;
    }
  }
`;

const StWarnWrapper = styled.div`
  margin-top: 24px;

  svg {
    height: 24px;
    width: 24px;
    margin-right: 16px;
    fill: ${({ theme }) => theme.color.yellow};
    vertical-align: -10px;
  }
  em {
    display: inline-block;
    max-width: 255px;
    font-size: 12px;
    line-height: 16px;
    vertical-align: top;
  }
`;

export default HostInfo;
