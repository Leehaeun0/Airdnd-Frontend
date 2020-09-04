import React, { useEffect, useRef, useState } from 'react';
import { PricePopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, resetFilter } from '../../Modules/search';
import { useHistory, useLocation } from 'react-router-dom';
import { updateQuery } from '../../lib/searchUtils';
import qs from 'qs';

const PricePopupContainer = ({ popupState, onClose }) => {
  const { min, max } = useSelector(state => state.search.filterApplied.price);
  const [range, setRange] = useState({ value: [min, max] });
  const isDisabled = min === 12000 && max === 1000000;
  const history = useHistory();
  const { search } = useLocation();
  const queryObj = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const dispatch = useDispatch();
  const onReset = () => {
    setRange({ value: [12000, 1000000] });
    dispatch(resetFilter('price'));
  };
  const onSave = () => dispatch(saveFilter('price', { min, max }, isDisabled));

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (!popupState || popup.current.contains(target)) return;

    if (isDisabled) {
      const { priceMin, priceMax, ...newQueryObj } = queryObj;
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    } else {
      const newQueryObj = { ...queryObj, priceMin: min, priceMax: max };
      history.replace(`/search?${qs.stringify(newQueryObj)}`);
    }

    onClose('price', isDisabled);
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <PricePopup
        popupState={popupState}
        isDisabled={isDisabled}
        range={range}
        setRange={setRange}
        onSave={onSave}
        onReset={onReset}
      />
    </div>
  );
};

export default React.memo(PricePopupContainer);
