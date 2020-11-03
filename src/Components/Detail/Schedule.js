import React from 'react';
// import { useDispatch } from 'react-redux';
import Division from './Division';
import styled from 'styled-components';
import DetailCalendarContainer from '../../Containers/Detail/DetailCalendarContainer';
import CalendarDeleteBtnContainer from '../../Containers/Detail/CalendarDeleteBtnContainer';
import CalendarKeybordBtnContainer from '../../Containers/Detail/CalendarKeybordBtnContainer';
// import {
//   deleteCheckInOut,
//   setChangeInitialDate,
// } from '../../Modules/reservation';

const Schedule = ({
  checkinString,
  checkoutString,
  allChecked,
  onlyCheckin,
  minimumStay,
}) => {
  // const dispatch = useDispatch();

  // const onClick = () => {
  //   dispatch(deleteCheckInOut());
  //   dispatch(setChangeInitialDate());
  // };

  return (
    <Division title="체크인 날짜를 선택해주세요." padding="8px">
      <StTravelTerm>
        {onlyCheckin
          ? `최소 숙박 일수: ${minimumStay}박`
          : allChecked
          ? `${checkinString} - ${checkoutString}`
          : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
      </StTravelTerm>
      <DetailCalendarContainer />
      <CalendarKeybordBtnContainer />
      {/* <StKeybordBtn transition transScale="0.88">
        <svg
          aria-hidden="true"
          role="presentation"
          focusable="false"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
      </StKeybordBtn> */}
      <CalendarDeleteBtnContainer />
      {/* <StDeleteDate btnType="underlined" transition onClick={onClick}>
        날짜 지우기
      </StDeleteDate> */}
    </Division>
  );
};

const StTravelTerm = styled.div`
  padding-top: 4px;
  margin-bottom: 20px;
  line-height: 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

// const StKeybordBtn = styled(Button)`
//   width: 48px;
//   height: 48px;
//   padding: 0;
//   border: none;
//   border-radius: 50%;

//   svg {
//     height: 24px;
//     width: 24px;
//     fill: currentcolor;
//   }
// `;

// const StDeleteDate = styled(Button)`
//   vertical-align: super;
//   padding: 8px;
//   margin-left: calc(100% - 145px);
// `;

export default Schedule;
