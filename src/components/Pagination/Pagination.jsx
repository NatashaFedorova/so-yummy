import Pagination from 'rc-pagination';
import * as React from 'react';
import {
  PaginationContainer,
  PageButton,
  Slider,
  ContainerForAline,
} from './Pagination.styled';
import { animateScroll } from 'react-scroll';

export const PagePagination = ({
  cardsPerPage,
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const handlePageButtonClick = page => {
    scrollToTop();
    handlePageChange(page);
  };
  return (
    <ContainerForAline>
      <PaginationContainer>
        <Pagination
          total={totalPages}
          pageSize={cardsPerPage}
          current={currentPage}
          onChange={handlePageChange}
          prevIcon={<PageButton>{'<'}</PageButton>}
          nextIcon={<PageButton>{'>'}</PageButton>}
          itemRender={(page, type, element) => {
            if (type === 'page') {
              return (
                <PageButton
                  onClick={() => handlePageButtonClick(page)}
                  active={element.props.active}
                >
                  {page}
                </PageButton>
              );
            }
            if (type === 'prev') {
              return element;
            }
            if (type === 'next') {
              return element;
            }
            return <Slider />;
          }}
        />
      </PaginationContainer>
    </ContainerForAline>
  );
};
