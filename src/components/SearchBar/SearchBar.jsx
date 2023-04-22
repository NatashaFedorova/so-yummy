import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.input.value;
    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams(value !== '' ? { filter: value } : {});
  };
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <SearchTypeSelector/>
    </>
  );
};

export default SearchBar;
