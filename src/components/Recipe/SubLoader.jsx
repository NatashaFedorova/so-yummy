import { Watch } from 'react-loader-spinner';
import { Box } from './Loading.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const SubLoading = () => {
  return createPortal(
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
    </Box>,
    modalRoot
  );
};

export default SubLoading;
