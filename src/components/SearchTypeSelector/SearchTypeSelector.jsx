import { SearchWrapper } from './SearchTypeSelector.styled';
import {
  SearchOptions,
  Options,
  SearchOption,
} from './SearchTypeSelector.styled';
import { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const SearchTypeSelector = ({ getSearchType }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Title');
  useEffect(() => {
    getSearchType(type);
  }, [type]);
  const handleTypeChange = e => {
    setType(e.currentTarget.textContent);
  };
  return (
    <SearchWrapper>
      <p>Search by: </p>
      <Options
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true && (
          <SearchOptions open={open}>
            <SearchOption onClick={handleTypeChange}>Title</SearchOption>
            <SearchOption onClick={handleTypeChange}>Indredients</SearchOption>
          </SearchOptions>
        )}
        {type}
        <AiOutlineDown fill={'#8baa36'} />
      </Options>
    </SearchWrapper>
  );
};

export default SearchTypeSelector;
