// ${props => props.theme.colors.text}
import styled from 'styled-components';
import { device } from '../Container/Container.styled';

export const DefaultSquare = styled.div`
  background: ${props => props.theme.colors.decoreElements.accent};
  border-radius: ${props => props.theme.radii.decore};
  transform: rotate(-25deg);

  @media ${device.mobile} {
    width: 8px;
    height: 8px;
  }

  @media ${device.tablet} {
    width: 14px;
    height: 14px;
  }
`;

export const DefaultSquareСircle = styled.div`
  background: ${props => props.theme.colors.decoreElements.main};

  @media ${device.mobile} {
    border-radius: ${props => props.theme.radii.circle};
    width: 6px;
    height: 6px;
  }

  @media ${device.tablet} {
    border-radius: ${props => props.theme.radii.decore};
    transform: rotate(-25deg);
    width: 12px;
    height: 12px;
  }
`;
