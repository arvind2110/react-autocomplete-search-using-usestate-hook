import { Col, ListGroup, Row } from "react-bootstrap";
import Message from "../../Common/Notifications/Message";
import React, { useContext } from "react";
import AutoCompleteSuggestionsContext from "../Context/AutoCompleteSuggestionsContext";

const ProductSuggestions = ({ suggestions }) => {
    const { showItem } = useContext(AutoCompleteSuggestionsContext);

    return (
        suggestions?.length > 0 ?
            <Row className="justify-content-md-center mt-2">
                <Col xs>
                    <ListGroup>
                        { 
                            suggestions.map((item) => {
                                return (
                                    <ListGroup.Item key={ "user-" + item.id } className="custom-cursor" onClick={() => showItem(item.id)} >
                                        { item.title }
                                    </ListGroup.Item>
                                );
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        :
            <Row className="justify-content-md-center mt-2">
                <Col xs>
                    <Message message="No record found!!!" messageType="secondary" />
                </Col>
            </Row>
    );
}

export default ProductSuggestions;