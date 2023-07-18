import React from 'react';
import { Alert } from "react-bootstrap";

const Message = ({ message, messageType }) => {
    return (
        <Alert className="mt-2" variant={messageType}>
            {message}
        </Alert>
    );
}

export default Message;