import { Watch } from 'react-loader-spinner';
import { Box } from './SubLoaderHero.styled';

const SubLoadingHero = () => {
  return (
    <Box>
      <Watch
        height="60"
        width="60"
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

export default SubLoadingHero;
