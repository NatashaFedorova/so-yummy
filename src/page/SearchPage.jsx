import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/constants/Container';
import MainPageTitle from 'components/MainPageTitle';
import SearchedRecepiesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Section from 'components/constants/Section.styled';
import { useState } from 'react';
const SearchPage = () => {
  const [searhType, setSearchType] = useState('Title');
  const getSearchType = type => {
    setSearchType(type);
  };
  return (
    <Section>
      <Container>
        <MainPageTitle>Search</MainPageTitle>
        <SearchBar getSearchType={getSearchType} />
        <SearchedRecepiesList searhType={searhType} />
      </Container>
    </Section>
  );
};

export default SearchPage;
