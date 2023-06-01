import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '../Button';
import { Icon } from '../Icon';

import './Modal.css';

export const Modal = forwardRef(function Modal({ title, children }, ref) {
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    },
    close: closeModal,
  }));

  function closeModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  }

  return (
    showModal &&
    createPortal(
      <div className="modal-mask" onClick={closeModal}>
        <div className="modal">
          <div className="modal__header">
            <Button variant="icon" onClick={closeModal}>
              <Icon hrefIconName="#close" />
            </Button>
          </div>
          <h2 className="modal__title">{title}</h2>
          <div className="modal-content">{children}</div>
        </div>
      </div>,
      document.body,
    )
  );
});
