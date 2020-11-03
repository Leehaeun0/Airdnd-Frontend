import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Button from './Button';

const Calendar = ({
  responsiveScreen,
  thisMonth,
  nextMonth,
  thisMonthDates,
  nextMonthDates,
  onClickBeforeMonth,
  onClickNextMonth,
  checkin,
  checkout,
  onClickCheckDate,
  onMouseenter,
  onMouseLeave,
  getDiff,
  hoverDate,
  reservedDates,
  isDetailPage,
  onClickWrapper,
  checkAfterReserved,
  checkBeforeCheckin,
  beforeToday,
  stayDates,
  minimumStay,
  isReservationBox,
  ...rest
}) => {
  const addZero = num => ((num + '').length === 1 ? '0' + num : num);

  const renderCalendar = (nowMonthDates, nowMonth) => {
    const _nowMonth = addZero(nowMonth.month);
    return (
      <StCalendarWrapper>
        <StMonth>
          {nowMonth.month}월 {nowMonth.year}
        </StMonth>
        <StDays>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </StDays>
        <StDates onMouseLeave={onMouseLeave}>
          {nowMonthDates.map((date, i) => {
            const _date = addZero(date);
            const nowDate = `${nowMonth.year}.${_nowMonth}.${_date}`;
            const dateTime = new Date(nowDate).getTime();
            const reserved = reservedDates.find(v => v === nowDate);
            const isAfterReserved = reserved || checkAfterReserved(dateTime);
            const isCheckin = checkin === nowDate;
            const isCheckout = checkout === nowDate;
            const stayDate = stayDates.find(v => v === nowDate);

            return (
              <StDateWrapper
                key={i}
                onClick={onClickWrapper}
                margin={nowMonth.firstDay}
                darken={checkin && !isAfterReserved && getDiff(dateTime)}
                checkin={isCheckin}
                checkout={isCheckout}
                hoverDate={hoverDate === nowDate}
                stayDate={stayDate}
                reserved={reserved}
                beforeToday={beforeToday(dateTime)}
                afterReserved={isAfterReserved && !checkout}
                beforeCheckin={
                  isDetailPage && !checkout && checkBeforeCheckin(dateTime)
                }
              >
                <StDateBtn
                  id={`dateId-${nowMonth.year}.${_nowMonth}.${_date}`}
                  onClick={e => onClickCheckDate(e, dateTime, reserved)}
                  onMouseEnter={onMouseenter}
                  checkin={isCheckin}
                  checkout={isCheckout}
                  hoverDate={hoverDate === nowDate && !isAfterReserved}
                  stayDate={stayDate}
                  btnType="circle"
                >
                  {date}
                </StDateBtn>

                {isDetailPage && (isCheckin || isCheckout || stayDate) && (
                  <StTooltipWrapper>
                    <div className="tooltip">
                      <div>
                        {stayDates.length
                          ? `최소 ${minimumStay}박`
                          : isCheckin
                          ? '체크인 요일'
                          : '체크아웃 요일'}
                      </div>
                      <svg role="presentation" focusable="false">
                        <path className="arrow1" d="M0,0 20,0 10,10z"></path>
                        <path className="arrow2" d="M0,0 10,10 20,0"></path>
                      </svg>
                    </div>
                  </StTooltipWrapper>
                )}
              </StDateWrapper>
            );
          })}
        </StDates>
      </StCalendarWrapper>
    );
  };

  return (
    <>
      <StWrapper isDetailPage={isDetailPage} {...rest}>
        <StNextMonthBtn btnType="circle" onClick={onClickBeforeMonth}>
          <AiOutlineLeft />
        </StNextMonthBtn>
        <StNextMonthBtn btnType="circle" onClick={onClickNextMonth}>
          <AiOutlineRight />
        </StNextMonthBtn>
        {renderCalendar(thisMonthDates, thisMonth)}
        {(!responsiveScreen || isReservationBox) &&
          renderCalendar(nextMonthDates, nextMonth)}
      </StWrapper>
    </>
  );
};

const StWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 642px;
  min-width: 308px;
  min-height: 300px;
  margin-top: 30px;

  ${({ isDetailPage }) =>
    isDetailPage &&
    css`
      @media screen and (max-width: 1200px) {
        width: 308px;

        .nextMonth {
          display: none;
        }
      }
    `}
`;

const StNextMonthBtn = styled(Button)`
  position: absolute;
  right: 5px;
  top: -6px;
  border: none;

  :nth-of-type(1) {
    left: 5px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

const StCalendarWrapper = styled.div`
  width: 50%;
  width: 308px;
  min-width: 308px;
  display: inline-block;
  vertical-align: top;

  :nth-of-type(1) {
    margin-right: 26px;
  }
`;

const StMonth = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  font-weight: 500;
`;

const StDays = styled.ul`
  li {
    display: inline-block;
    width: 44px;
    padding: 5px 0 22px;
    text-align: center;
    font-size: 12px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StDates = styled.div``;

const StTooltipWrapper = styled.div`
  display: none;
`;

const StDateWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: -13px;
  width: 44px;
  height: 44px;

  :first-child {
    margin-left: ${({ margin }) => margin * 44}px;
  }

  ${({ darken }) =>
    darken &&
    css`
      background-color: ${({ theme }) => theme.color.softGray};
    `}

  ${({ checkin }) =>
    checkin &&
    css`
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    `}

  ${({ checkout, hoverDate }) =>
    (checkout || hoverDate) &&
    css`
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    `}


  ${({ reserved, beforeToday, beforeCheckin, afterReserved }) =>
    (reserved || beforeToday || beforeCheckin || afterReserved) &&
    css`
      cursor: initial;

      & button {
        color: rgba(72, 72, 72, 0.25);
        text-decoration: line-through;
        font-weight: 400;
        cursor: initial;

        :hover {
          border: none;
        }
      }
    `}

    
  ${({ checkin, checkout, stayDate }) =>
    (checkin || checkout || stayDate) &&
    css`

    &:hover > div {
      display: block;
      position: absolute;
      transform: translate(-25%, -100%);
      left: 0px;
      top: -12px;
      white-space: nowrap;
      z-index: 3;

      > div.tooltip {
        background: white;
        border: 1px solid ${({ theme }) => theme.color.shadow};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
        position: relative;
        display: inline-block;
        padding: 4px 8px;
        font-size: 14px;

        svg {
          position: absolute;
          width: 20px;
          height: 10px;
          bottom: -10px;
          left: 50%;
          margin-left: -10px;
        }
        .arrow1 {
          fill: white;
        }
        .arrow2 {
          stroke: ${({ theme }) => theme.color.shadow};
          fill: transparent;
        }
      }
  `}
`;

const StDateBtn = styled(Button)`
  border: none;
  width: 42px;
  height: 42px;
  margin: 1px;
  font-size: 14px;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0);

  :hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  ${({ checkin, checkout }) =>
    (checkin || checkout) &&
    css`
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ stayDate }) =>
    stayDate &&
    css`
      color: ${({ theme }) => theme.color.darkGray};

      :hover {
        border-color: ${({ theme }) => theme.color.line};
      }
    `}
`;

export default Calendar;
