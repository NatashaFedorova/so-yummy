import {
  BtnScrollToTopStyle,
  Box,
  IconLeaf,
  // IconLine,
  Text,
} from './ScrollToTopComponent.styled';

const ScrollToTopComponent = () => {
  return (
    <BtnScrollToTopStyle
      smooth
      component={
        <Box>
          <IconLeaf />
          {/* <IconLine /> */}
          <Text>up</Text>
        </Box>
      }
    />
  );
};

export default ScrollToTopComponent;
