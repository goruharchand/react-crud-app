import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='header'>CRUD App</Col>
        </Row>
      </Container>
    </>
  )
}

export default Header;