import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Components/Common/ErrorHandling/Fallback';
import HeaderComponent from './Components/Common/HeaderComponent';
import FooterComponent from './Components/Common/FooterComponent';
import MainComponent from './Components/MainComponent';

const App = () => {
    const logError = (error, info) => {
        // Do something with the error, e.g. log to an external API
    };

    console.log(process.env.PRODUCT_SEARCH_API);
    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={logError} >
            <Container fluid>
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
            </Container>
        </ErrorBoundary>
    );
};

export default App;
