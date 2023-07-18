import React from 'react';
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ProductAutoComplete from "./AutoComplete/ProductAutoComplete";
import UserAutoComplete from "./AutoComplete/UserAutoComplete";

const MainComponent = () => {
    return (
      <Fragment>
          <Row>
            <Col>
              <ProductAutoComplete />
            </Col>
            <Col>
              <UserAutoComplete />
            </Col>
          </Row>
      </Fragment>
    );
};

export default MainComponent;