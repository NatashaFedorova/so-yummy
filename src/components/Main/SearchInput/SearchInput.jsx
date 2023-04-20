import { useState } from 'react';

import {
  SearchInputWrapper,
  SearchInputForm,
  SearchInputField,
  SearchInputButton,
} from './SearchInput.styled';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputQuery = searchValue.trim().toLowerCase();
    if (inputQuery === '') {
      return;
      // setSearchQuery();
    }

    console.log(inputQuery);

    //   setSearchQuery(inputQuery);
    //   dispatch(changeQuery(searchValue));
    //   return navigate(`/search?query=${inputQuery}`);
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
