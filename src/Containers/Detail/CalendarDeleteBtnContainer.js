import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalendarDeleteBtn from '../../Components/Detail/CalendarDeleteBtn';
import { deleteCheckInOut } from '../../Modules/reservation';

const CalendarDeleteBtnContainer = ({ ...rest }) => {
  const { checkin, checkout } = useSelector(state => state.reservation);
  const dispatch = useDispatch();

  const onClick = () => {
    if (checkin || checkout) dispatch(deleteCheckInOut());
  };

  return <CalendarDeleteBtn onClick={onClick} {...rest} />;
};

export default CalendarDeleteBtnContainer;
