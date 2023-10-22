import React from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {content}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal