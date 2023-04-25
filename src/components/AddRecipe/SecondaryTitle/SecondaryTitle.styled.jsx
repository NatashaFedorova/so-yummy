import styled from 'styled-components';

export const SecondaryHeading = styled.h2`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.addRecipePage.titleSecondary};
`;
