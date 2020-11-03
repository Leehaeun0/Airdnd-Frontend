import React from 'react';
import { useSelector } from 'react-redux';
import DetailFixedHeader from '../../Components/Detail/DetailFixedHeader';

const DetailFixedHeaderContainer = ({ isScrollUnderBox }) => {
  const { amenitiesRef, reviewsRef, locationRef, checkPopupRef } = useSelector(
    state => state.home.scrollState,
  );

  const clickNav = ref => {
    window.scroll({
      top: typeof ref === 'object' ? ref.offsetTop - 80 : ref,
      left: 0,
      behavior: 'smooth',
    });
  };

  const onClickReserveBtn = () => {
    const ref = checkPopupRef.offsetParent.offsetParent;
    checkPopupRef.click();
    console.log(ref, ref.offsetTop);

    window.scroll({
      top:
        checkPopupRef.offsetParent.offsetParent.offsetTop +
        checkPopupRef.offsetParent.offsetTop -
        60,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <DetailFixedHeader
      clickNav={clickNav}
      amenitiesRef={amenitiesRef}
      reviewsRef={reviewsRef}
      locationRef={locationRef}
      onClickReserveBtn={onClickReserveBtn}
      isScrollUnderBox={isScrollUnderBox}
    />
  );
};

export default DetailFixedHeaderContainer;
