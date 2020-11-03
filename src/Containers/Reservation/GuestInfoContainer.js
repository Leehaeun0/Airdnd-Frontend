import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import GuestInfo from '../../Components/Reservation/GuestInfo';
import {
  setToHostMessage,
  setChangeInitialMessage,
} from '../../Modules/reservation';

const payload = {
  homeId: 1,
  checkin: '2020.09.22',
  checkout: '2020.09.25',
  adult: 1,
  child: 0,
  infant: 0,
  toHostMessage: '',
};

const GuestInfoContainer = () => {
  const {
    id,
    hostFirstName,
    profileImg,
    isSupperhost,
    toHostMessage,
    changeInitialMessage,
    checkin,
    checkout,
    adult,
    child,
    infant,
  } = useSelector(
    state => ({
      id: state.home.homeState.home.id,
      hostFirstName: state.home.homeState.home.host.hostFirstName,
      profileImg: state.home.homeState.home.host.profileImg,
      isSupperhost: state.home.homeState.home.host.isSupperhost,
      toHostMessage: state.reservation.toHostMessage,
      changeInitialMessage: state.reservation.changeInitialMessage,
      checkin: state.reservation.checkin,
      checkout: state.reservation.checkout,
      adult: state.reservation.guests.adult,
      child: state.reservation.guests.child,
      infant: state.reservation.guests.infant,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!toggle);
  const onNextPage = () => {
    if (!changeInitialMessage) dispatch(setChangeInitialMessage());
    if (!toHostMessage) return;
    history.push(
      `/Reservation/Payment/${id}?${checkin && 'checkIn=' + checkin}${
        checkout && '&checkOut=' + checkout
      }${+adult ? '&adult=' + adult : ''}${+child ? '&child=' + child : ''}${
        +infant ? '&infant=' + infant : ''
      }`,
    );
  };

  const onSetMessage = ({ target }) => {
    if (!changeInitialMessage) dispatch(setChangeInitialMessage());
    dispatch(setToHostMessage(target.value));
  };

  return (
    <GuestInfo
      hostFirstName={hostFirstName}
      profileImg={profileImg}
      isSupperhost={isSupperhost}
      onNextPage={onNextPage}
      onSetMessage={onSetMessage}
      onToggle={onToggle}
      toggle={toggle}
      toHostMessage={toHostMessage}
      blankMessage={changeInitialMessage && !toHostMessage}
    />
  );
};

export default GuestInfoContainer;
