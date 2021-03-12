import React from 'react'
import ReactModal from 'react-modal'
import { ModalContent, ModalHeader, customStyles } from './styles';
import closeIcon from '../../assets/close-icon.svg';

interface ModalProps {
  isOpen: boolean;
  title: string;
  closeModal(): any;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal, title }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >

      <ModalContent>
        <ModalHeader>
          <p>{title}</p>
          <button onClick={closeModal} >
            <img src={closeIcon} alt='close' />
          </button>
        </ModalHeader>
        {children}
      </ModalContent>

    </ReactModal>
  )
}

export default Modal;