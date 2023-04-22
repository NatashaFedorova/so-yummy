import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import IconBtn from '../IconBtn/IconBtn';
import { BackdropOver, ModalPaper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({
  children,
  onClose,
  isOver,
  isOpen,
  onDrop,
  onDragOver,
  onDragLeave,
}) => {
  const modalRef = useRef();

  const closeModal = useCallback(() => {
    enableBodyScroll(modalRef.current);
    onClose();
  }, [onClose]);

  const onBackdropClickHandler = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const onEscHandler = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscHandler);
    return () => window.removeEventListener('keydown', onEscHandler);
  }, [closeModal]);

  useEffect(() => {
    disableBodyScroll(modalRef.current);

    return () => clearAllBodyScrollLocks();
  }, []);

  return createPortal(
    <BackdropOver open={true} onClick={onBackdropClickHandler} ref={modalRef}>
      <ModalPaper
        isOver={isOver}
        isOpen={isOpen}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <IconBtn onClick={closeModal}>
          <AiOutlineCloseCircle size="30px" />
        </IconBtn>
        {children}
      </ModalPaper>
    </BackdropOver>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
