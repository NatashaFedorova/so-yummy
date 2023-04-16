import styled from 'styled-components';

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
  border: 1px solid red;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 320px;
    padding: 0 16px;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${device.desktop} {
    width: 1440px;
    padding: 0 100px;
  }
`;
