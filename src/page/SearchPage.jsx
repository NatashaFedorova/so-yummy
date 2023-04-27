import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/constants/Container';
import MainPageTitle from 'components/MainPageTitle';
import SearchedRecepiesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Section from 'components/constants/Section.styled';
import { useRef, useState } from 'react';
const SearchPage = () => {
  const refDiv = useRef()
  const [searhType, setSearchType] = useState('Title');
  const getSearchType = type => {
    setSearchType(type);
  };
  return (
    <Section>
      <Container>
        <MainPageTitle>Search</MainPageTitle>
        <SearchBar getSearchType={getSearchType} />
        <div ref={refDiv}><SearchedRecepiesList refDiv={refDiv} searhType={searhType} /></div>
      </Container>
    </Section>
  );
};

export default SearchPage;
