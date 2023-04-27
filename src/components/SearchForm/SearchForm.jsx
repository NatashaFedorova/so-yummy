import { useState } from 'react';
import { SearchButton, SearchInput, Form } from './SearchForm.styled';

const SearchForm = ({ handleSubmit, searchParams }) => {
  const [value, setValue] = useState(searchParams.get('filter') ?? '');
  const handleInput = e => {
    setValue(e.currentTarget.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput
        onChange={handleInput}
        value={value}
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
