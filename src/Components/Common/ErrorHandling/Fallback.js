import React from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';

const Fallback = ({ error, resetErrorBoundary }) => {  
  return (
    <Container fluid>
      <Row className='mt-2'>
        <Col>
          <Alert variant="danger">
            <Alert.Heading>Application Error</Alert.Heading>
            <p>{error.message}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => resetErrorBoundary()} variant="outline-danger">
                Reset Application
              </Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Fallback;