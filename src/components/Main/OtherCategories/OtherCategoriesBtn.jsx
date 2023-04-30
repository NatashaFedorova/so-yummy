import {
  OtherCategoriesWrapper,
  OtherCategoriesLink,
} from './OtherCategoriesBtn.styled';

const OtherCategoriesBtn = () => {
  return (
    <OtherCategoriesWrapper>
      <OtherCategoriesLink to="/categories/beef">
        Other categories
      </OtherCategoriesLink>
    </OtherCategoriesWrapper>
  );
};

export default OtherCategoriesBtn;
