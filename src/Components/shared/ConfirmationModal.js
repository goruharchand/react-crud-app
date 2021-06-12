import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const ConfirmationModal = ({show, closeConfirmModal, deleteUser}) => {
  return (
    <>
     <Modal show={show} onHide={closeConfirmModal} animation={false}>
        <Modal.Body>
          <h3>Are you sure, you want to delete this user?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeConfirmModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmationModal;