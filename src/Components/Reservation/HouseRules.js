import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import CommonLayout from './CommonLayout';
import Button from '../Global/Button';
import icons from '../../lib/icons';

const HouseRules = ({
  address,
  checkinTime,
  checkoutTime,
  rules,
  readMore,
  onReadMore,
  onNextPage,
  checkin,
  checkout,
}) => {
  const checkinMon = checkin.split('.')[1];
  const checkoutMon = checkout.split('.')[1];
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const options = { weekday: 'long' };

  return (
    <CommonLayout title="숙소 이용규칙 확인하기">
      <StSubTitle>{address} 2박</StSubTitle>
      <StCheckWrapper>
        <StDateWrapper>
          <span>{+checkinMon > 9 ? checkinMon : checkinMon.slice(1)}월</span>
          <span>{checkin.split('.')[2]}</span>
        </StDateWrapper>
        <StTextWrapper>
          <span>{checkinDate.toLocaleDateString('ko-KR', options)} 체크인</span>
          <span>{checkinTime}</span>
        </StTextWrapper>
      </StCheckWrapper>
      <StCheckWrapper>
        <StDateWrapper>
          <span>{+checkoutMon > 9 ? checkoutMon : checkoutMon.slice(1)}월</span>
          <span>{checkout.split('.')[2]}</span>
        </StDateWrapper>
        <StTextWrapper>
          <span>
            {checkoutDate.toLocaleDateString('ko-KR', options)} 체크아웃
          </span>
          <span>{checkoutTime}</span>
        </StTextWrapper>
      </StCheckWrapper>
      <StSubTitle border>주의할 사항</StSubTitle>
      <StRuleList>
        {rules.map((rule, i) => {
          if (!readMore && i > 3) return;
          const iconObj = icons.find(v => rule.name.includes(v.name));
          return (
            <li key={i}>
              <div>
                <StRuleSvg
                  warning={iconObj && iconObj.warning}
                  viewBox={
                    iconObj && iconObj.viewBox ? '-2 -2 20 20' : '0 0 24 24'
                  }
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  dangerouslySetInnerHTML={{
                    __html: iconObj
                      ? iconObj.icon
                      : '<path d="m6.32874849 11.6781574c.75542549 0 1.34774775-.5410186 1.34774775-1.5525901 0-.82366353-.59232226-2.99008648-2.1195616-2.99008648-.91618752 0-1.67395421.77433766-1.67395421 1.68569158 0 1.12509931 1.30014346 2.856985 2.44576806 2.856985m12.63854941-4.52701758-2.1484364 2.15546165c-.0741378.29595514-.1131577.58016603-.1131577.81896583 0 1.0115715.5923223 1.5525901 1.3485281 1.5525901 1.1979113 0 2.4457681-1.8039171 2.4457681-2.85463615 0-.86202807-.6797269-1.59721822-1.5327021-1.67238143m-3.9456935 3.95859578-8.40176737 8.4292409c.37381076.7351901 1.01139611 1.2190533 2.0337178 1.2190533 1.63337347 0 2.50039597-1.4727292 3.31044927-1.569032 1.0956792-.1299698 1.8339359 1.8109636 3.6990877 1.8109636 1.9018304 0 2.5269294-1.7154437 2.5269294-3.6297567 0-2.6510691-1.1979113-5.0735168-3.1684168-6.2604691m-4.869685-1.67238146c1.0652436 0 1.3813049-1.55493892 1.3813049-2.59469666 0-1.45237246-.5267688-2.75363554-1.90651288-2.75363554-.93491708 0-1.82144947.7281436-1.82144947 1.93623562 0 1.12353341 1.11128708 3.41209658 2.34665745 3.41209658m9.3031274-4.43462942-14.95633216 15.00445588c-.11393814.1143107-.2637746.1714661-.41361107.1714661-.14983646 0-.29967292-.0571554-.41361106-.1714661-.22865668-.2294044-.22865668-.6013057 0-.83071l2.56829059-2.5766889c.31528088-3.0887381 2.37319102-6.2589031 6.0067252-6.2589031.0741378 0 .1428129.0140931.2153899.0164419l1.1479658-1.15093664c-.5704711-.46663827-.7608883-1.56041957-.7608883-2.36059458 0-1.45158951.5244276-2.75676734 1.9072933-2.75676734.8880932 0 1.8198887.69134495 1.8198887 1.93232087 0 .06811666-.0046824.14327987-.0140472.22314078l2.0649337-2.07246894c.2286567-.22940438.5993459-.22940438.8280026 0 .2286566.22940438.2286566.60130568 0 .83071007"></path>',
                  }}
                />
              </div>
              {rule.name}
            </li>
          );
        })}
      </StRuleList>
      {rules.length > 4 && (
        <StReadmoreBtn readMore={readMore} hover onClick={onReadMore}>
          <span>{readMore ? '숨기기' : '더 보기'}</span>
          <FiChevronDown />
        </StReadmoreBtn>
      )}
      <StButton btnType="color" color="main" onClick={onNextPage}>
        동의 및 계속하기
      </StButton>
    </CommonLayout>
  );
};

const slideDown = keyframes`
  0% {
    opacity: 10%;
    transform: translateY(-10px);
  }
  100% {
    opacity: 100%;
  }
`;

const StSubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 36px 0 24px;
  ${props => props.border && 'border-top: 1px solid #dddddd'}
`;

const StCheckWrapper = styled.div`
  display: inline-block;
  width: 50%;
  margin-bottom: 36px;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
  }
`;

const StDateWrapper = styled.div`
  display: inline-block;
  width: 58px;
  height: 56px;
  padding: 7px 16px;
  text-align: center;
  font-weight: 700;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.softGray};

  span:first-child {
    font-size: 12px;
    line-height: 1.3px;
  }
`;

const StTextWrapper = styled.div`
  display: inline-block;
  padding-top: 8px;
  padding-left: 16px;

  span:first-child {
    display: block;
    font-size: 14px;
  }
`;

const StRuleList = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-top: 8px;

    animation-name: ${slideDown};
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;

    div {
      display: inline-block;
      margin-right: 16px;
      padding: 16px;
      border: 1px solid ${({ theme }) => theme.color.line};
      border-radius: 3px;
    }
  }
`;

const StRuleSvg = styled.svg`
  height: 24px;
  width: 24px;
  display: block;
  fill: ${({ theme }) => theme.color.softBlack};

  path {
    width: 100%;
    height: 100%;
  }

  ${({ warning }) =>
    warning &&
    css`
      fill: ${({ theme }) => theme.color.warning} !important;
    `}
`;

const StReadmoreBtn = styled(Button)`
  display: block;
  margin-top: 16px;
  padding: 5px 0;
  border: none;
  border-radius: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.green};

  span:hover,
  span:focus {
    text-decoration: underline;
  }

  svg {
    margin-left: 4px;
    vertical-align: -2px;
    transform: rotate(0deg);
    transition-duration: 250ms !important;
    transition-timing-function: ease-in-out;
    stroke-width: 3;

    ${({ readMore }) =>
      readMore &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const StButton = styled(Button)`
  padding: 14px 24px;
  margin: 64px 0;
`;

export default HouseRules;
