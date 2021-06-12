import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='footer'></Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;