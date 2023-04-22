import { NavLink, useNavigate } from 'react-router-dom';

import {
  OtherCategoriesWrapper,
  OtherCategoriesLink,
} from './OtherCategoriesBtn.styled';

const OtherCategoriesBtn = () => {
  return (
    <OtherCategoriesWrapper>
      <OtherCategoriesLink to="/categories">
        Other categories
      </OtherCategoriesLink>
    </OtherCategoriesWrapper>
  );
};

export default OtherCategoriesBtn;
