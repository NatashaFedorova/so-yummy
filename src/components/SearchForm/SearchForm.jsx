import {
  SearchButton,
  SearchInput,
  Form,
} from './SearchForm.styled';

const SearchForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput type="text" name="input" autoComplete="off" autoFocus />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
