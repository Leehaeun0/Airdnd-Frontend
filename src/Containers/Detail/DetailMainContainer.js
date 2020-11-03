import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { throttle } from 'lodash';
import Subject from '../../Components/Detail/Subject';
import HomeInfos from '../../Components/Detail/HomeInfos';
import FullsizeWrapper from '../../Components/Detail/FullsizeWrapper';
import { getHome, onResize } from '../../Modules/home';
import { setInitialDatas } from '../../Modules/reservation';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from '../../Containers/Global/BookmarkModalContainer';

const DetailMainContainer = () => {
  const { isLoading, home, error } = useSelector(state => state.home.homeState);
  const { isScreenMedium } = useSelector(state => state.home.screenState);
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true });

  console.log(location, queryObj);

  const resize = () => dispatch(onResize());

  useEffect(() => {
    if (home) return;
    dispatch(getHome(id));
    window.addEventListener('resize', throttle(resize, 150));

    dispatch(setInitialDatas(queryObj));

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [dispatch]);

  if (error)
    return (
      <div style={{ padding: '30px 30px 300px' }}>
        에러 발생! 잘못된 요청입니다.
      </div>
    );

  return (
    <>
      <Subject isLoading={isLoading || !home} home={home} />
      <HomeInfos
        isLoading={isLoading || !home}
        home={home}
        isScreenMedium={isScreenMedium}
      />
      {!isLoading && home && <FullsizeWrapper home={home} />}
      {isLoggedIn && <BookmarkListModalContainer />}
      {isLoggedIn && <NewBookmarkModalContainer />}
    </>
  );
};

export default React.memo(DetailMainContainer);
