
import { useState } from 'react';
import { SearchButton, SearchInput, SearchForm,SearchBox,SearchWrapper } from './SearchRecipes.styled';
import Dropdown from '../SearchTypeSelector/SearchDropdown';
const SearchRecipes = () => {
  const [input, setInput] = useState('');
  const handleNameChange = e => {
    const value = e.currentTarget.value.toLowerCase();
    setInput(value);
  };
  return (
    <>
      <SearchBox>
        <SearchForm>
          <SearchInput
            type="text"
            name="input"
            value={input}
            onChange={handleNameChange}
            autoComplete="off"
            autoFocus
          />
          <SearchButton>Search</SearchButton>
        </SearchForm>
      <SearchWrapper>
        <p>Search by: </p>
        <Dropdown/>
      </SearchWrapper>
      </SearchBox>
    </>
  );
};
export default SearchRecipes;
