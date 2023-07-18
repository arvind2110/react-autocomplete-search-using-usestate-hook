import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../../../Common/Loader/Loader";
import { useErrorBoundary } from "react-error-boundary";

const Product = ({ productId }) => {
    const { showBoundary } = useErrorBoundary();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(process.env.PRODUCT_DETAILS_API + productId).then((response) => {
            return response.json();
        }).then((product) => {
            setProduct(product);
        }).catch((error) => {
            showBoundary(error);
        });
    }, [productId]);

    return (
        (!product)
            ? <Loader />
            : (
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                    Title
                    </Col>
                    <Col xs={6} md={6}>
                        {product.title}              
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        Brand
                    </Col>
                    <Col xs={6} md={6}>
                        {product.brand}              
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        Category
                    </Col>
                    <Col xs={6} md={6}>
                        {product.category}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        Price
                    </Col>
                    <Col xs={6} md={6}>
                        {product.price}              
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        Description
                    </Col>
                    <Col xs={6} md={6}>
                        {product.description}              
                    </Col>
                </Row>
            </Container>
        )
    );
}

export default Product;