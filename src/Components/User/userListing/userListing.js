import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userListing.css';
import { Table, Button } from 'react-bootstrap';
import ModalBox from '../../shared/Modal';
import ConfirmationModal from '../../shared/ConfirmationModal';

const UserListing = () => {

    const usersData = [
		{ id: 1, firstName: 'John', lastName: 'Doe', email: 'joe@gmail.com', mobile: 9799445860, password: '123456'},
		{ id: 2, firstName: 'Ross', lastName: 'Taylor', email: 'ross@gmail.com', mobile: 9799445861, password: '123456'},
		{ id: 3, firstName: 'Ben', lastName: 'sphere', email: 'ben@gmail.com', mobile: 9799445862, password: '123456' },
	];

    const initialFormState = { id: null, firstName: '', lastName: '', email: '', mobile:'', password:'' };

    const [ userList, setUserList ] = useState(usersData);
    const [ label, setLabel ] = useState('ADD_USER');
    const [show, setShow] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const handleClose = () => setShow(false);
    const closeConfirmModal = () => setConfirmModal(false);

    const handleShow = (event, user) => {
        setShow(true);
        setLabel(event);
        event === 'EDIT_USER' ? setCurrentUser(user) : setCurrentUser(initialFormState); 
    };

    const addUser = (user, label) => {
        if (label === 'ADD_USER') {
            user.id = userList.length + 1
		    setUserList([ ...userList, user ]);
        } else if (label === 'EDIT_USER') {
            userList.forEach((userVal, index) => {
                if (userVal.id === user.id) {
                    userList[index] = user;
                    setUserList([...userList]);
                } else {
                    setUserList([...userList]);
                }
            });
        }
	}

    const handleDelete = (user) => {
        setConfirmModal(true);
        setCurrentUser(user);
    }

    const deleteUser = () => {
        setConfirmModal(false);
        setUserList(userList.filter(userVal => (userVal.id !== currentUser.id)))
    }

    return (
        <div className='table-container'>
            <div className='main-table'>
                <Button variant="primary" onClick={() =>handleShow('ADD_USER', {})}>Add New User</Button>{' '}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Password</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.length > 0 ? (
                            userList.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.password}</td>
                                    <td className='edit-btn' onClick={() =>handleShow('EDIT_USER', user)}>Edit</td>
                                    <td className='edit-btn' onClick={() =>handleDelete(user)}>Delete</td>
                                </tr>
                            ))
                        ):(
                            <tr>
                            <td colSpan={3}>No userList</td>
                          </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <ModalBox show={show} label={label} currentUser={currentUser} handleClose={handleClose} addUser={addUser}/>
            <ConfirmationModal show={confirmModal} closeConfirmModal={closeConfirmModal}
            deleteUser={deleteUser}/>
        </div>
    )
}

export default UserListing;