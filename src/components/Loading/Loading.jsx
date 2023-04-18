import { ThreeCircles } from 'react-loader-spinner';
import { Box } from './Loading.styled';

const Loading = () => {
  return (
    <Box>
      <ThreeCircles
        height="100"
        width="100"
        color="#8baa36"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#22252a"
        middleCircleColor="#F7B700"
      />
    </Box>
  );
};

export default Loading;
