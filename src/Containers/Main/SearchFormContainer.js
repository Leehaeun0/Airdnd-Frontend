import React, { useState } from 'react';
import SearchForm from '../../Components/Main/SearchForm';

const SearchFormContainer = () => {
  // location,checkIn,checkOut,guests
  const [type, setType] = useState(null);

  const closePopup = () => {
    setType(null);
  };

  const changeType = e => {
    setType(e.target.name);
  };
  return (
    <SearchForm
      type={type}
      changeType={changeType}
      closePopup={closePopup}
    ></SearchForm>
  );
};

export default SearchFormContainer;