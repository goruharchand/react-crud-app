import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const AddUser = ({label, currentUser, addUser, handleClose}) => {

    const initialFormState = { id: null, firstName: '', lastName: '', email: '', mobile:'', password:'' };
	const [ user, setUser ] = useState(initialFormState);

    const handleInputChange = event => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value })
	}

    const handleUserSubmit = (event) => {
        event.preventDefault();
        if (!user.firstName || !user.lastName || !user.email || !user.mobile || !user.password) return;
        addUser(user, label);
        setUser(initialFormState);
        handleClose();
    }

    useEffect(
        () => {
          setUser(currentUser)
        },
        [currentUser]
    )

  return (
    <>
      <Form onSubmit={handleUserSubmit}>
        <Form.Group controlId="formBasicFname">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter FirstName" name='firstName' value={user.firstName} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicLname">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" name='lastName' value={user.lastName} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicMobile">
          <Form.Label>Email Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile" name='mobile' value={user.mobile} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleInputChange}/>
        </Form.Group>
        {label === 'ADD_USER' ? (
            <Button variant="primary" type="submit">Add New User</Button>
        ) : (
            <Button variant="primary" type="submit">Update User</Button>
        )}
      </Form>
    </>
  )
}

export default AddUser;