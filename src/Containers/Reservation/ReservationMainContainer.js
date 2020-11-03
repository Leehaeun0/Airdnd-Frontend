import React, { useEffect } from 'react';
import ReservationSubRouter from '../../Routers/ReservationSubRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHome } from '../../Modules/home';
import { setInitialDatas } from '../../Modules/reservation';
import { openModal } from '../../Modules/modal';
import LoginModalContainer from '../Main/LoginModalContainer';
import ReservationNotLogIn from '../../Components/Reservation/ReservationNotLogIn';
import qs from 'qs';

const ReservationMainContainer = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { home } = useSelector(state => state.home.homeState);
  const dispatch = useDispatch();

  const { pathname, search } = useLocation();
  const regExp = /\d/g;
  const filteredHomeId = (pathname.match(regExp) || []).join('');
  const queryObj = qs.parse(search, { ignoreQueryPrefix: true });

  console.log(filteredHomeId, pathname);

  useEffect(() => {
    if (!home) {
      dispatch(getHome(filteredHomeId));
    }
    dispatch(setInitialDatas(queryObj));
  }, []);

  const onClick = () => dispatch(openModal('login'));

  if (!isLoggedIn) {
    dispatch(openModal('login'));
    return (
      <>
        <ReservationNotLogIn onClick={onClick} />
        <LoginModalContainer />
      </>
    );
  }
  if (!home) return <div style={{ padding: '300px 0' }} />;

  return <ReservationSubRouter />;
};

export default ReservationMainContainer;
