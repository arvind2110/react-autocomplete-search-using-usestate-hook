import React, { memo, useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AutoCompleteContext from "../Context/AutoCompleteContext";
import AutoCompleteSuggestions from "../Lists/AutoCompleteSuggestions";

const AutoCompleteForm = () => {
    const { title } = useContext(AutoCompleteContext);
    
    const [searchText, setSearchText] = useState('');
    
    const searchHandler = (event) => {
        let inputText = event.target.value;
        inputText = (searchText) ? inputText : inputText.trim();

        setSearchText(inputText);
    }

    return (
        <Form>
            <Row className="justify-content-md-center">
                <Col xs>
                    <Form.Control type="text" value={searchText} placeholder={title} onChange={searchHandler} />
                </Col>
            </Row>
            {searchText !== "" && <AutoCompleteSuggestions searchText={searchText} setSearchText={setSearchText} />}
        </Form>
    );
}

export default memo(AutoCompleteForm);