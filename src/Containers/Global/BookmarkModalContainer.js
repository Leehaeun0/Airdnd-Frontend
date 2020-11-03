import React, { useState, useEffect } from 'react';
import {
  BookmarkListModal,
  NewBookmarkModal,
} from '../../Components/Global/BookmarkModal.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  addBookmarkNewList,
  addBookmarkOldList,
  openNewModal,
  closeListModal,
  closeNewModal,
  fetchBookmarkLists,
} from '../../Modules/wishlists';

const BookmarkListModalContainer = () => {
  const { data, listModal, selectedId, selectedImg } = useSelector(
    state => state.wishlists,
  );

  const { bookmarkLists } = data || [];
  const dispatch = useDispatch();
  const closeBmListModal = () => dispatch(closeListModal());
  const openBmNewModal = () => dispatch(openNewModal());

  const onClickBookmark = bookmarkListId => {
    dispatch(
      addBookmarkOldList({
        bookmarkListId,
        bookmarkListTitle: '',
        bookmarkHomeId: selectedId,
        bookmarkImage: selectedImg,
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchBookmarkLists());
  }, [dispatch]);

  return (
    <BookmarkListModal
      modalState={listModal}
      bookmarkLists={bookmarkLists}
      closeBmListModal={closeBmListModal}
      openBmNewModal={openBmNewModal}
      onClickBookmark={onClickBookmark}
    />
  );
};

const NewBookmarkModalContainer = () => {
  const { location } = useSelector(state => state.searchForm);
  const { newModal, selectedId, selectedImg } = useSelector(
    state => state.wishlists,
  );

  const [value, setValue] = useState(location);
  const onChange = ({ target }) => setValue(target.value);
  const dispatch = useDispatch();
  const closeBmNewModal = () => dispatch(closeNewModal());

  const onClickNewList = title => {
    dispatch(
      addBookmarkNewList({
        bookmarkListId: '',
        bookmarkListTitle: title,
        bookmarkHomeId: selectedId,
        bookmarkImage: selectedImg,
      }),
    );
  };

  return (
    <NewBookmarkModal
      value={value}
      modalState={newModal}
      onChange={onChange}
      onClickNewList={onClickNewList}
      closeBmNewModal={closeBmNewModal}
    />
  );
};

export { BookmarkListModalContainer, NewBookmarkModalContainer };
