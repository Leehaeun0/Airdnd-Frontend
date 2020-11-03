import React from 'react';
import styled from 'styled-components';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import DeatailGuestPopupContainer from '../../Containers/Detail/DeatailGuestPopupContainer';
import CheckPopupContainer from '../../Containers/Detail/CheckPopupContainer';

const ReservationBox = ({
  checkPopupRef,
  price,
  multipliedPrice,
  percentage,
  totalPrice,
  rating,
  count,
  dateDiff,
  notChecked,
  onGoToReservation,
}) => {
  return (
    <StWarpper>
      <StStickyWrapper>
        <StReserveBox>
          <h3>
            {!notChecked ? (
              <>
                ₩{price}
                <span>/박</span>
              </>
            ) : (
              '요금을 확인하려면 날짜를 입력하세요'
            )}
          </h3>
          <Rating rate={rating} count={count} />

          <StWriteWrapper>
            <CheckPopupContainer checkPopupRef={checkPopupRef} />

            <DeatailGuestPopupContainer displayName />
          </StWriteWrapper>

          <StReserveBtn
            color="main"
            border="none"
            width="100%"
            padding="14px"
            hover
            onClick={onGoToReservation}
          >
            {!notChecked ? '예약하기' : '예약 가능 여부 보기'}
          </StReserveBtn>
          {!notChecked && (
            <>
              <StChargeMsg>
                예약 확정 전에는 요금이 청구되지 않습니다.
              </StChargeMsg>
              <StChargeList>
                <li>
                  <Button btnType="underlined" padding="0" hover>
                    ₩{price} x {dateDiff}박
                  </Button>
                  <span>₩{multipliedPrice}</span>
                </li>
                <li>
                  <Button btnType="underlined" padding="0" hover>
                    서비스 수수료
                  </Button>
                  <span>₩{percentage}</span>
                </li>
              </StChargeList>
              <StTotalCharge>
                <span>총합계</span>
                <span>₩{totalPrice}</span>
              </StTotalCharge>
            </>
          )}
        </StReserveBox>
        <StButton>숙소 신고하기</StButton>
      </StStickyWrapper>
    </StWarpper>
  );
};

const StWarpper = styled.div`
  position: relative;
  margin-left: 8%;
  width: 34%;
`;

const StStickyWrapper = styled.div`
  position: sticky;
  top: 80px;
  padding-top: 48px;
  text-align: center;
  z-index: 1;
`;

const StReserveBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  text-align: left;
  background-color: ${({ theme }) => theme.color.white};
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  h3 {
    display: inline-block;
    width: calc(100% - 92px);
    margin-bottom: 24px;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 2.6rem;
    word-break: keep-all;

    span {
      font-weight: 400;
      font-size: 16px;
      vertical-align: top;
      /* line-height: 20px; */
      white-space: nowrap;
      padding-left: 4px;
    }
  }
`;

const StWriteWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    /* border: 1px solid ${({ theme }) => theme.color.gray}; */
  `;

// const StCheckWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   width: 100%;
//   outline: none;
// `;

// const commonWrapper = css`
//   position: relative;
//   width: 50%;
//   height: 56px;
//   padding: 26px 12px 10px;
//   border: 1px solid ${({ theme }) => theme.color.gray};
// `;

// const StCheckIn = styled.div`
//   ${commonWrapper}
//   border-right: none;
//   border-top-left-radius: 8px;
// `;

// const StCheckOut = styled.div`
//   ${commonWrapper}
//   border-top-right-radius: 8px;
// `;

// const StName = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 12px;
//   font-size: 10px;
//   font-weight: 600;
//   line-height: 12px;
// `;

// const StContent = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.color.darkGray};
// `;

const StReserveBtn = styled(Button)`
  margin-top: 16px;
`;

const StChargeMsg = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 14px;
`;

const StChargeList = styled.ul`
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;

    &:last-child {
      padding-bottom: 0;
    }

    button {
      border-radius: 0;
      margin-right: auto;
    }
  }
`;

const StTotalCharge = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 24px;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const StButton = styled.button`
  margin-top: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 14px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  outline: none;
`;

export default ReservationBox;
