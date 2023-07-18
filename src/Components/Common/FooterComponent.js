import React from 'react';
import { Alert, Col, Row } from "react-bootstrap";

const FooterComponent = () => {
    return (
      <Row className="text-center mt-2">
          <Col>
            <Alert variant="success">
                &copy; {new Date().getFullYear()} &nbsp;
                <Alert.Link href="https://github.com/arvind2110" target="_blank" rel="noreferrer">Arvind Singh</Alert.Link>
                &nbsp; | All rights reserved.
            </Alert>
          </Col>
      </Row>
    );
};

export default FooterComponent;
  