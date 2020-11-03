import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalendarContainer from '../Global/CalendarContainer';
import {
  setCheckin,
  setCheckout,
  // setChangeInitialDate,
} from '../../Modules/reservation';

const DetailCalendarContainer = ({ isReservationBox, ...rest }) => {
  const { isScreenLarge } = useSelector(state => state.home.screenState);
  const { checkin, checkout, reservedDates } = useSelector(
    state => state.reservation,
  );
  // const { checkIn, checkOut } = useSelector(state => state.searchForm);

  const dispatch = useDispatch();

  // const confirmCheckin = changeInitialDate ? checkin : checkIn;
  // const confirmCheckout = changeInitialDate ? checkout : checkOut;

  const setCheckinData = checkin => dispatch(setCheckin(checkin));
  const setCheckoutData = checkout => dispatch(setCheckout(checkout));
  // const setChangeDataTrue = () => dispatch(setChangeInitialDate());

  return (
    <CalendarContainer
      responsiveScreen={isScreenLarge}
      setCheckinData={setCheckinData}
      setCheckoutData={setCheckoutData}
      checkin={checkin}
      checkout={checkout}
      // changeInitialDate={changeInitialDate}
      // setChangeDataTrue={setChangeDataTrue}
      reservedDates={reservedDates}
      isDetailPage={true}
      isReservationBox={isReservationBox}
      {...rest}
    />
  );
};

export default DetailCalendarContainer;
