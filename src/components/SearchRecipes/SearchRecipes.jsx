import Container from 'components/constants/Container';
import { useState } from 'react';
import { SearchButton, SearchInput, SearchForm,SearchBox,SearchWrapper } from './SearchRecipes.styled';
import Dropdown from './SearchDropdown';
const SearchRecipes = () => {
  const [input, setInput] = useState('');
  const handleNameChange = e => {
    const value = e.currentTarget.value.toLowerCase();
    setInput(value);
  };
  return (
    <Container>
      <h1>Search</h1>
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
    </Container>
  );
};
export default SearchRecipes;
