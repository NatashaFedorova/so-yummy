import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import {
  SearchInputWrapper,
  SearchInputForm,
  SearchInputField,
  SearchInputButton,
} from './SearchInput.styled';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputQuery = searchValue.trim().toLowerCase();
    if (inputQuery === '') {
      setSearchValue();
    }

    console.log(inputQuery);

    setSearchValue(inputQuery);
    return navigate(`/search?query=${inputQuery}`);
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
