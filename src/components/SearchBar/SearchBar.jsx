import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ getSearchType }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.input.value;
    setSearchParams(value !== '' ? { filter: value } : {});
  };
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} searchParams={searchParams} />
      <SearchTypeSelector getSearchType={getSearchType} />
    </>
  );
};

export default SearchBar;
