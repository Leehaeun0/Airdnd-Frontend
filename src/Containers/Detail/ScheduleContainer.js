import React from 'react';
import { useSelector } from 'react-redux';
import Schedule from '../../Components/Detail/Schedule';

const ScheduleContainer = () => {
  const { checkin, checkout } = useSelector(state => state.reservation);
  const { minimumStay } = useSelector(state => state.home.homeState.home);
  const allChecked = !!(checkin && checkout);
  const onlyCheckin = checkin && !checkout;

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const checkinString = checkinDate.toLocaleDateString('ko-KR', options);
  const checkoutString = checkoutDate.toLocaleDateString('ko-KR', options);

  return (
    <Schedule
      checkinString={checkinString}
      checkoutString={checkoutString}
      allChecked={allChecked}
      onlyCheckin={onlyCheckin}
      minimumStay={minimumStay}
    />
  );
};

export default ScheduleContainer;
