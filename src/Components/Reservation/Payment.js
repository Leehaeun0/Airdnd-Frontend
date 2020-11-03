import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CommonLayout from './CommonLayout';
import Button from '../Global/Button';

const Payment = ({ onClickPayment, payState, postState }) => {
  const { isLoading, success, error } = postState;
  const history = useHistory();

  return (
    <CommonLayout title="확인 및 결제" hidden>
      <StWrapper>
        {payState === 'paying' && '결제를 진행하는 중입니다.'}
        {payState === 'payError' && (
          <>
            <div>결제에 실패하셨습니다. 다시 시도해주세요.</div>
            <StButton color="main" hover onClick={onClickPayment}>
              결제하기
            </StButton>
          </>
        )}
        {payState === 'paySuccess' && (
          <>
            <div>결제를 완료하셨습니다.</div>
            <StButton
              color="main"
              hover
              onClick={() => history.push('/trips/v1?tab=upcoming')}
            >
              예약 확인하기
            </StButton>
          </>
        )}
        {error && '죄송합니다. 서버에 에러가 발생하였습니다.'}
      </StWrapper>
    </CommonLayout>
  );
};

const StButton = styled(Button)`
  margin-top: 80px;
  padding: 15px 35px;
  border: none;
`;

const StWrapper = styled.div`
  height: calc(96vh - 250px);
  padding-top: 24px;
`;

export default Payment;
