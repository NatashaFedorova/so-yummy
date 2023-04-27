import React from 'react';
import ContentLoader from 'react-content-loader';

export const CategoryContentLoad = ({ cardsData }) => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {cardsData.map((card, index) => {
      console.log(card);
      return <rect />;
    })}
  </ContentLoader>
);
