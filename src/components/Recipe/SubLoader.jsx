import { Watch } from 'react-loader-spinner';
import { Box } from './SubLoader.styled';

const SubLoading = () => {
  return (
    <Box>
      <Watch
        height="40"
        width="40"
        radius="30"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};

export default SubLoading;
