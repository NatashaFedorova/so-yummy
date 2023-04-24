import {
  BtnScrollToTopStyle,
  Box,
  IconLeaf,
  Text,
} from './ScrollToTopComponent.styled';

const ScrollToTopComponent = () => {
  return (
    <BtnScrollToTopStyle
      smooth
      component={
        <Box>
          <IconLeaf />
          <Text>up</Text>
        </Box>
      }
    />
  );
};

export default ScrollToTopComponent;
