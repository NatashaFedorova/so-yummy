import { SearchWrapper } from './SearchTypeSelector.styled';
import {
  SearchOptions,
  Options,
  SearchOption,
} from './SearchTypeSelector.styled';
import {  useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';


const SearchTypeSelector = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Title');

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
            <SearchOption
              onClick={() => {
                setType('Title');
              }}
            >
              Title
            </SearchOption>
            <SearchOption
              onClick={() => {
                setType('Indredients');
              }}
            >
              Indredients
            </SearchOption>
          </SearchOptions>
        )}
        {type}
        <AiOutlineDown fill={'#8baa36'} />
      </Options>
    </SearchWrapper>
  );
};

export default SearchTypeSelector;
