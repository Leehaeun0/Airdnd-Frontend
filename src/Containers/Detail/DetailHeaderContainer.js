import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailFixedHeaderContainer from './DetailFixedHeaderContainer';
import { setPopupState } from '../../Modules/home';

const DetailHeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { homeInfosRef, reservationBoxY } = useSelector(
    state => state.home.scrollState,
  );
  // const [scrollY, setScrollY] = useState(window.scrollY);
  const [isScrollTop, setIsScrollTop] = useState(
    window.pageYOffset < (homeInfosRef ? homeInfosRef.offsetTop : 643),
  );
  const [isScrollUnderBox, setIsScrollUnderBox] = useState(
    window.pageYOffset > 2569,
  );
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [initAnimation, setInitAnimation] = useState(false);
  const searchForm = useSelector(state => state.searchForm);
  const { popupState } = useSelector(state => state.home);
  // const { isScrollTop } = useSelector(state => state.home.scrollState);

  const onScroll = () => {
    // dispatch(setIsScrollTop(window.scrollY < 600));
    // setScrollY(window.scrollY);
    // console.log(isScrollUnderBox, popupState, window.scrollY > 2569);
    // if (isScrollUnderBox && popupState) dispatch(setPopupState(false));
    setIsScrollTop(
      window.pageYOffset < (homeInfosRef ? homeInfosRef.offsetTop : 643),
    );
    setIsScrollUnderBox(window.pageYOffset > 2569);
    setIsSearchBtnClicked(false);
  };

  console.log(window.pageYOffset, homeInfosRef);

  useEffect(() => {
    // console.log(isSearchBtnClicked);
    if (!initAnimation && isSearchBtnClicked) {
      setInitAnimation(true);
    }
    // window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', throttle(onScroll, 10));
    return () => {
      // window.removeEventListener('scroll', onScroll);
      console.log('컴포넌트 사라진다!!!!');
    };
  }, [onScroll, initAnimation]);

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };

  // return <DetailFixedHeaderContainer />;
  return isScrollTop ? (
    <DetailHeader
      initAnimation={initAnimation}
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    />
  ) : (
    <DetailFixedHeaderContainer isScrollUnderBox={isScrollUnderBox} />
  );
};

export default DetailHeaderContainer;
