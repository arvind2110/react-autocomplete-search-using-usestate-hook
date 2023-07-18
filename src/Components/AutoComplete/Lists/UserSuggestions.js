import React, { useContext } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import Message from "../../Common/Notifications/Message";
import AutoCompleteSuggestionsContext from "../Context/AutoCompleteSuggestionsContext";

const UserSuggestions = ({ suggestions }) => {
    const { showItem } = useContext(AutoCompleteSuggestionsContext);
    return (
        suggestions?.length > 0 ?
            <Row className="justify-content-md-center mt-2">
                <Col xs>
                    <ListGroup>
                        { 
                            suggestions.map((user) => {
                                return (
                                    <ListGroup.Item className="custom-cursor" key={ "user-" + user.id } onClick={() => showItem(user.id)} >
                                        { user.firstName + " " + user.lastName }
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

export default UserSuggestions;