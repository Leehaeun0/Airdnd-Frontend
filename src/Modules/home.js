import * as homeApi from '../Api/homeApi';

// home 받아오기
const GET_HOME = 'home/GET_HOME';
const GET_HOME_SUCCESS = 'home/GET_HOME_SUCCESS';
const GET_HOME_ERROR = 'home/GET_HOME_ERROR';
const RESIZE_SCREEN = 'home/RESIZE_SCREEN';
const TOGGLE_IS_BOOKMARKED = 'home/TOGGLE_IS_BOOKMARKED';
const SET_SCROLL_LOCATION_Y = 'home/SET_SCROLL_LOCATION_Y';
const SET_POPUP_STATE = 'home/SET_POPUP_STATE';

export const getHome = id => async dispatch => {
  dispatch({ type: GET_HOME }); // 요청이 시작됨
  try {
    const home = await homeApi.getHome(id); // Api 호출
    setTimeout(() => {
      dispatch({ type: GET_HOME_SUCCESS, home }); // 성공
    }, 800);
  } catch (e) {
    dispatch({ type: GET_HOME_ERROR, error: e }); // 실패
  }
};

export const onResize = () => {
  console.log('resizing...');
  return { type: RESIZE_SCREEN };
};

export const toggleIsBookmarked = () => ({ type: TOGGLE_IS_BOOKMARKED });

export const setScrollLocationY = (name, top) => ({
  type: SET_SCROLL_LOCATION_Y,
  name,
  top,
});

export const setPopupState = boolean => ({ type: SET_POPUP_STATE, boolean });

const initialState = {
  homeState: { isLoading: false, home: null, error: null },
  screenState: {
    isScreenMedium: window.matchMedia('screen and (max-width: 1127px)').matches,
    isScreenLarge: window.matchMedia('screen and (max-width: 1200px)').matches,
  },
  scrollState: {
    amenitiesRef: null,
    reviewsRef: null,
    locationRef: null,
    checkPopupRef: null,
  },
  popupState: false,
};

// 리듀서
const home = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state,
        homeState: { isLoading: true, home: null, error: null },
      };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        // homeState: { isLoading: false, home: action.home, error: null },
        homeState: {
          isLoading: false,
          home: {
            ...action.home,
            isBookmarked: action.home.isBookmarked === 'true' ? true : false,
          },
          error: null,
        },
      };
    case GET_HOME_ERROR:
      return {
        ...state,
        homeState: { isLoading: false, home: null, error: action.error },
      };
    case RESIZE_SCREEN:
      return {
        ...state,
        screenState: {
          ...state.screenState,
          isScreenMedium: window.matchMedia('screen and (max-width: 1127px)')
            .matches,
          isScreenLarge: window.matchMedia('screen and (max-width: 1200px)')
            .matches,
        },
      };
    case TOGGLE_IS_BOOKMARKED:
      return {
        ...state,
        homeState: {
          ...state.homeState,
          home: {
            ...state.homeState.home,
            isBookmarked: !state.homeState.home.isBookmarked,
          },
        },
      };
    case SET_SCROLL_LOCATION_Y:
      return {
        ...state,
        scrollState: {
          ...state.scrollState,
          [action.name]: action.top,
        },
      };
    case SET_POPUP_STATE:
      return {
        ...state,
        popupState: action.boolean,
      };
    default:
      return state;
  }
};

export default home;
