import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setResevationGuest,
  // setChangeInitialGuests,
} from '../../Modules/reservation';
import DetailGuestPopup from '../../Components/Detail/DetailGuestPopup';

const DeatailGuestPopupContainer = ({ displayName, ...rest }) => {
  // const {
  //   adult: searchAdult,
  //   child: searchChild,
  //   infant: searchInfant,
  // } = useSelector(state => state.searchForm.guests);
  const { adult, child, infant } = useSelector(
    state => state.reservation.guests,
  );
  // const { changeInitialGuests } = useSelector(state => state.reservation);
  const { capacity } = useSelector(state => state.home.homeState.home);
  const dispatch = useDispatch();
  const [popupState, SetPopupState] = useState(false);
  const popup = useRef();

  // const newAdult = (changeInitialGuests ? reserveAdult : searchAdult) || 1;
  // const newChild = changeInitialGuests ? reserveChild : searchChild;
  // const newInfant = changeInitialGuests ? reserveInfant : searchInfant;

  const changeGuestData = (_adult, _child, _infant) => {
    const data = { adult: _adult, child: _child, infant: _infant };
    dispatch(setResevationGuest(data));
    // if (!changeInitialGuests) dispatch(setChangeInitialGuests());
  };

  const isFullCapacity = adult + child >= capacity;

  const increaseGuestCount = guestType => {
    if ((guestType === 'adult' || !adult) && !isFullCapacity) {
      changeGuestData(adult + 1, child, infant);
    } else if (guestType === 'child' && !isFullCapacity) {
      changeGuestData(adult, child + 1, infant);
    } else if (guestType === 'infant' && infant < 5) {
      changeGuestData(adult, child, infant + 1);
    }
  };

  const decreaseGuestCount = guestType => {
    if (guestType === 'adult' && adult > 1) {
      changeGuestData(adult - 1, child, infant);
    } else if (guestType === 'child' && child > 0) {
      changeGuestData(adult, child - 1, infant);
    } else if (guestType === 'infant' && infant > 0) {
      changeGuestData(adult, child, infant - 1);
    }
  };

  const onClosePopup = ({ target }) => {
    if (
      (!popupState || popup.current.contains(target)) &&
      target.textContent !== '닫기'
    )
      return;
    SetPopupState(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClosePopup);
    return () => {
      document.removeEventListener('click', onClosePopup);
    };
  }, [onClosePopup]);

  const onOpenPopup = () => SetPopupState(true);

  return (
    <DetailGuestPopup
      adult={adult}
      child={child}
      infant={infant}
      popup={popup}
      onOpenPopup={onOpenPopup}
      popupState={popupState}
      onClosePopup={onClosePopup}
      increaseGuestCount={increaseGuestCount}
      decreaseGuestCount={decreaseGuestCount}
      capacity={capacity}
      isFullCapacity={isFullCapacity}
      displayName={displayName}
      {...rest}
    />
  );
};

export default DeatailGuestPopupContainer;
