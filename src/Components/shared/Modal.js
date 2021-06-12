import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import AddUser from '../User/AddUser/addUser';

const ModalBox = ({show, label, currentUser, handleClose, addUser}) => {
  return (
    <>
     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
              {label === 'ADD_USER' ? 'Add New User' : 'Edit User'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddUser label={label} currentUser={currentUser} addUser={addUser} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalBox;