import React from 'react';
import Home from '../../Components/Search/Home';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/mouseEvents';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const HomeContainer = ({ home }) => {
  const { id } = useSelector(state => state.user.data);
  const { dateDiff } = useSelector(state => state.searchForm);
  const hoveredHome = useSelector(state => state.mouseEvents);
  const { checkIn, checkOut, adult, child, infant } = useSelector(
    state => state.search.filterForm,
  );
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());

  const href = `/detail/${home.homeId}${checkIn && '?checkIn=' + checkIn}${
    checkOut && '&checkOut=' + checkOut
  }${+adult ? '&adult=' + adult : ''}${+child ? '&child=' + child : ''}${
    +infant ? '&infant=' + infant : ''
  }`;

  return (
    <Home
      home={home}
      dateDiff={dateDiff}
      isHovered={isHovered}
      onClickHeart={() => toggleBookmark(id, home, dispatch)}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      href={href}
    />
  );
};

export default React.memo(HomeContainer);
