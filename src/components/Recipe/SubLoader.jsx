import { BallTriangle } from 'react-loader-spinner';
import { Box } from './Loading.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Loading = () => {
    return createPortal(
        <Box>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </Box>,
        modalRoot
    );
};

export default Loading;