import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Payment from '../../Components/Reservation/Payment';
import { postReservation } from '../../Modules/reservation';

const PaymentContainer = () => {
  const dispatch = useDispatch();
  const [payState, setPayState] = useState('paying'); // paying, paySuccess, payError
  const { firstName, lastName, phone, email } = useSelector(
    state => state.user.data,
  );
  const { id: homeId, price } = useSelector(state => state.home.homeState.home);
  const { checkin, checkout, guests, toHostMessage, postState } = useSelector(
    state => state.reservation,
  );
  const { adult, child, infant } = guests;
  // const { isLoading, success, error } = postState;

  const payload = {
    homeId,
    checkin,
    checkout,
    adult,
    child,
    infant,
    toHostMessage,
  };
  // const postToServer = () => postReservation(payload);

  /* 1. 가맹점 식별하기 */
  const { IMP } = window;
  // eslint-disable-next-line no-undef
  IMP.init(process.env.REACT_APP_PAYMENT_API_KEY);

  const onClickPayment = () => {
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'kakaopay', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `merchant_${new Date().getTime()}`, // 주문번호
      amount: price, // 결제금액
      name: 'airdnd 숙소 예약', // 주문명
      buyer_name: `${lastName} ${firstName}`, // 구매자 이름
      buyer_tel: phone, // 구매자 전화번호
      buyer_email: email, // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg } = response;

    console.log(response);

    if (success) {
      alert('결제가 완료되었습니다');
      setPayState('paySuccess');
      dispatch(postReservation(payload));
    } else {
      alert(`결제 실패: ${error_msg}`);
      setPayState('payError');
    }
  }

  useEffect(() => {
    onClickPayment();
  }, []);

  // const onClickPayment = () => {
  //   startPayment();
  //   setPayState('rePaying');
  // };

  return (
    <Payment
      onClickPayment={onClickPayment}
      payState={payState}
      postState={postState}
    />
  );
};

export default PaymentContainer;
