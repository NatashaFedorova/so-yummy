import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const CategoryTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontSize: '${props => props.theme.fontSizes.s}',
  height: 'auto',
  color: '#BDBDBD',
  padding: 27,
  textTransform: 'lowercase',

  '&.Mui-selected': {
    color: '#8baa36',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#8baa36',
    height: '2px',
  },
  '@media (min-width: 768px)': {
    fontSize: 18,
  },
}));

export const CategoryTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#8baa36',
  },
}));
