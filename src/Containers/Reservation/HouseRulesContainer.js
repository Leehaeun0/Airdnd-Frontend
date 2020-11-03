import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HouseRules from '../../Components/Reservation/HouseRules';

const HouseRulesContainer = () => {
  const {
    id,
    address,
    checkinTime,
    checkoutTime,
    rules,
    checkin,
    checkout,
    adult,
    child,
    infant,
  } = useSelector(
    state => ({
      id: state.home.homeState.home.id,
      address: state.home.homeState.home.address,
      checkinTime: state.home.homeState.home.checkin,
      checkoutTime: state.home.homeState.home.checkout,
      rules: state.home.homeState.home.notice.rules,
      checkin: state.reservation.checkin,
      checkout: state.reservation.checkout,
      adult: state.reservation.guests.adult,
      child: state.reservation.guests.child,
      infant: state.reservation.guests.infant,
    }),
    shallowEqual,
  );

  const history = useHistory();
  const [readMore, setReadMore] = useState(false);

  const shortAddress = address.split(',')[0];

  const onReadMore = () => setReadMore(!readMore);
  const onNextPage = () =>
    history.push(
      `/Reservation/GuestInfo/${id}?${checkin && 'checkIn=' + checkin}${
        checkout && '&checkOut=' + checkout
      }${+adult ? '&adult=' + adult : ''}${+child ? '&child=' + child : ''}${
        +infant ? '&infant=' + infant : ''
      }`,
    );

  return (
    <HouseRules
      address={shortAddress}
      checkinTime={checkinTime}
      checkoutTime={checkoutTime}
      rules={rules}
      readMore={readMore}
      onReadMore={onReadMore}
      onNextPage={onNextPage}
      checkin={checkin}
      checkout={checkout}
    />
  );
};

export default HouseRulesContainer;
