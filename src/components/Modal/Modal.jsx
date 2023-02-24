import { useEffect } from 'react';
import { Overlay, ModalContent } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
 
  useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose])

  const handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>
  );
};
