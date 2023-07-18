import React from 'react';
import { Spinner } from "react-bootstrap";

const Loader = ({animation = "border", variant = "primary"}) => {
    return <Spinner className="mt-3" animation={animation} variant={variant} />
}

export default Loader;