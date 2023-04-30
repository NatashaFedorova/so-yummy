import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/constants/Container';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchedRecepiesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Section from 'components/constants/Section.styled';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const refDiv = useRef();
  const location = useLocation();
  const [searhType, setSearchType] = useState('Title');

  useEffect(() => {
    if (location.state) {
      setSearchType(location.state.type);
    }
  }, [location.state]);

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
