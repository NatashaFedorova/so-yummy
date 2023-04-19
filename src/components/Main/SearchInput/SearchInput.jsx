import {
  SearchInputWrapper,
  SearchInputForm,
  SearchInputField,
  SearchInputButton,
} from './SearchInput.styled';

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SearchInputForm onSubmit>
        <SearchInputField type="text" />
        <SearchInputButton type="submit">Search</SearchInputButton>
      </SearchInputForm>
    </SearchInputWrapper>
  );
};

export default SearchInput;
