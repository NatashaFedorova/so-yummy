import { SearchWrapper } from './SearchTypeSelector.styled';
import {
  SearchOptions,
  Options,
  SearchOption,
  SearchBox,
  LineDown,
} from './SearchTypeSelector.styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const SearchTypeSelector = ({ getSearchType }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Title');
  const menuRef = useRef();
  const optionsRef = useRef();

  useEffect(() => {
    if (location.state) {
      setType(location.state.type);
    }
  }, [location.state]);

  const handleClick = e => {
    if (e.target !== menuRef.current && e.target !== optionsRef.current) {
      setOpen(false);
    }
  };
  useEffect(() => {
    getSearchType(type);

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [type, getSearchType]);
  const handleTypeChange = e => {
    setType(e.currentTarget.textContent);
  };
  return (
    <SearchWrapper>
      <p>Search by: </p>
      <SearchBox>
        <Options
          ref={optionsRef}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {type}
          <LineDown />
        </Options>
        {open === true && (
          <SearchOptions ref={menuRef} open={open}>
            <SearchOption onClick={handleTypeChange}>Title</SearchOption>
            <SearchOption onClick={handleTypeChange}>Ingredients</SearchOption>
          </SearchOptions>
        )}
      </SearchBox>
    </SearchWrapper>
  );
};

export default SearchTypeSelector;
