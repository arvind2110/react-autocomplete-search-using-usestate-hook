import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Loader from "../../../Common/Loader/Loader";
import { useErrorBoundary } from "react-error-boundary";

const User = ({ userId }) => {
    const { showBoundary } = useErrorBoundary();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(process.env.USER_DETAILS_API + userId).then((response) => {
            return response.json();
        }).then((user) => {
            setUser(user);
        }).catch((error) => {
            showBoundary(error);
        }).finally(() => {
            
        }) 
    }, [userId]);

    return (
        (!user)
            ? <Loader />
            : (
            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        <Image src={user.image} thumbnail fluid  />
                    </Col>
                    <Col xs={8} md={8}>
                        <Row>
                            <Col xs={12} md={12}>
                                Username : {user.username}({user.firstName })
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                Age : { user.age }
                            </Col>
                            <Col xs={6} md={6}>
                                Gender : {user.gender}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                City : { user.address.city }
                            </Col>
                            <Col xs={6} md={6}>
                                State : {user.address.state}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    );
}

export default User;