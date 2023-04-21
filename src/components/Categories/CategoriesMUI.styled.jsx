import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { device } from 'components/constants/deviceType/deviceType';

export const Link = styled(NavLink)`
  text-decoration: none;
`;

// не працює  з  ${props => props.theme.fontSizes.s}
export const CategoryTab = styled(Tab)`
  font-size: 14px;
  color: #bdbdbd;
  padding: 27px;
  text-transform: 'lowercase';

  & .mui-selected {
    color: '#8baa36';
  }

  & .MuiTabs-indicator {
    background-color: '#8baa36';
    height: '2px';
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const CategoryTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#8baa36',
  },
}));
