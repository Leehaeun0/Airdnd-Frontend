import { openModal } from '../Modules/modal';
import { changeHeart } from '../Modules/search';
import { toggleIsBookmarked } from '../Modules/home';
import { removeBookmark, openListModal } from '../Modules/wishlists';

export const toggleBookmark = (userId, home, dispatch) => {
  const homeId = home.homeId || home.id;
  const imageArray = home.imageArray || home.images;
  if (!userId) return dispatch(openModal('login'));
  if (home.isBookmarked) {
    dispatch(removeBookmark(homeId));
    return;
  }
  dispatch(openListModal(homeId, imageArray[0]));
};

export const fetchBookmarkDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async (dispatch, getState) => {
    console.log(param);
    const { home } = getState();
    dispatch({ type });
    try {
      const payload = await promiseCreator(param); // API 호출
      dispatch({ type: SUCCESS, payload, param }); // 호출 성공

      // state의 isBookmarked를 바꾸는 함수를 페이지에 맞게 호출함
      if (home.homeState.home) {
        dispatch(toggleIsBookmarked());
      } else {
        dispatch(changeHeart(param.bookmarkHomeId));
      }
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 호출 실패
    }
  };
};

export const createBookmarkDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return param => async dispatch => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, param });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};
