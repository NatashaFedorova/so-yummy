import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/constants/Container';
import MainPageTitle from 'components/MainPageTitle';
import SearchedRecepiesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { useState } from 'react';
const SearchPage = () => {
  const [searhType, setSearchType] = useState('Title')
  const getSearchType = type => {
    setSearchType(type)
  };
  return (
    <Container>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar getSearchType={getSearchType} />
      <SearchedRecepiesList searhType={searhType} />
    </Container>
  );
};

export default SearchPage;
