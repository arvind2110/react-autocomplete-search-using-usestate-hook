import React from 'react';
import { Col, Row } from "react-bootstrap";
import Message from "./Notifications/Message";

const HeaderComponent = () => {
    return (
      <Row className="text-center mt-2">
          <Col>
            <Message message="Auto Complete Search Example Using React useState hook" messageType="success" />
          </Col>
      </Row>
    );
};

export default HeaderComponent;