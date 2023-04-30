import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/constants/Container';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchedRecepiesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Section from 'components/constants/Section.styled';
import { useRef, useState } from 'react';

const SearchPage = () => {
  const refDiv = useRef();
  const [searhType, setSearchType] = useState('Title');
  const getSearchType = type => {
    setSearchType(type);
  };
  return (
    <Section>
      <Container>
        <MainTitle title={'Search'}></MainTitle>
        <SearchBar getSearchType={getSearchType} />
        <div ref={refDiv}>
          <SearchedRecepiesList refDiv={refDiv} searhType={searhType} />
        </div>
      </Container>
    </Section>
  );
};

export default SearchPage;
