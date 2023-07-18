import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const AppModal = ({getModalContent, setShowModal, modalTitle, modalSize}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => { 
        setShow(false);
        setShowModal(false);
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    return (
        <Modal 
            show={show}
            size={modalSize}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { show && getModalContent() }
            </Modal.Body>
        </Modal>
  );
}

export default AppModal;