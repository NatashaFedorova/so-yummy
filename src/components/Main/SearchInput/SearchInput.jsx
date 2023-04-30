import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SearchInputWrapper,
  SearchInputForm,
  SearchInputField,
  SearchInputButton,
} from './SearchInput.styled';

import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  width: '340px',
  closeButton: false,
  timeout: 4000,
});

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputQuery = searchValue.trim().toLowerCase();
    if (inputQuery === '') {
      Notify.info(`Please enter your query!`);
      return;
    }

    setSearchValue(inputQuery);
    return navigate(`/search?filter=${inputQuery}`, {
      replace: true,
      state: { type: 'Title' },
    });
  }

  return (
    <SearchInputWrapper>
      <SearchInputForm onSubmit={handleSubmit}>
        <SearchInputField
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Enter the text"
        />
        <SearchInputButton type="submit">Search</SearchInputButton>
      </SearchInputForm>
    </SearchInputWrapper>
  );
};

export default SearchInput;
