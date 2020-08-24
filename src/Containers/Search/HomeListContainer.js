import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from './BookmarkModalContainer';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';
import { removeBookmark } from '../../Modules/wishlists';

const HomeListContainer = ({ mapState }) => {
  const { homes } = useSelector(state => state.search);
  const { dateDiff } = useSelector(state => state.searchForm);
  const dispatch = useDispatch();
  const onRemoveBookmark = homeId => dispatch(removeBookmark(homeId));

  const [selectedId, setSelectedId] = useState(0);
  const [listModalState, setListModalState] = useState(false);
  const [newModalState, setNewModalState] = useState(false);

  const openListModal = () => setListModalState(true);
  const closeListModal = () => setListModalState(false);
  const openNewModal = () => {
    setListModalState(false);
    setNewModalState(true);
  };
  const closeNewModal = () => {
    setNewModalState(false);
    setListModalState(true);
  };

  return (
    <>
      <HomeList mapState={mapState}>
        {homes.map(home => {
          const onClickBookmark = (bookmark, id) => {
            if (bookmark) onRemoveBookmark(id);
            if (!bookmark) {
              openListModal();
              setSelectedId(id);
              console.log('=================', bookmark);
            }
          };

          return mapState ? (
            <HomeContainer
              key={home.homeId}
              home={home}
              dateDiff={dateDiff}
              onClickBookmark={onClickBookmark}
            />
          ) : (
            <HomeCardContainer
              key={home.homeId}
              home={home}
              dateDiff={dateDiff}
              onClickBookmark={onClickBookmark}
            />
          );
        })}
      </HomeList>
      <BookmarkListModalContainer
        listModalState={listModalState}
        closeListModal={closeListModal}
        openNewModal={openNewModal}
        homeId={selectedId}
      />
      <NewBookmarkModalContainer
        newModalState={newModalState}
        closeNewModal={closeNewModal}
        closeListModal={closeListModal}
        homeId={selectedId}
      />
    </>
  );
};

export default HomeListContainer;
