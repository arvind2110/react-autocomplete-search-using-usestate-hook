import React from 'react';
import Loader from "../Common/Loader/Loader";
import AutoCompleteContext from "./Context/AutoCompleteContext";
import AutoCompleteForm from "./Forms/AutoCompleteForm";
import ProductSuggestions from "./Lists/ProductSuggestions";
import ModalContext from '../Common/Modal/Context/ModalContext';
import { useState } from "react";
import AppModal from "../Common/Modal/Modal";
import Product from './Lists/ListItems/Product';

const ProductAutoComplete = () => {
    const title  = "Search Products";
    const apiUrl = process.env.PRODUCT_SEARCH_API;
    
    const [showModal, setShowModal] = useState(false);
    const [productId, setProductId] = useState(null);

    // Get API url
    const getUrl = (searchText) => {
        return apiUrl + searchText;
    }

    const getSuggestionComponent = (suggestions, isLoading) => {
        return (
            isLoading
            ? <Loader />
            : <ProductSuggestions suggestions={suggestions?.products} />
        );
    }

    const showProductDetails = (productId) => {
        setShowModal(true);
        setProductId(productId);
    }

    const getProduct = () => {
        return <Product productId={productId} />;
    }

    const suggestionsContextValue = {
        title: title,
        getUrl : getUrl,
        getSuggestionComponent: getSuggestionComponent
    }

    const modalContextValue = {
        showItemDetails: showProductDetails
    }

    return (
        <AutoCompleteContext.Provider value={suggestionsContextValue}>
            <ModalContext.Provider value={modalContextValue}>
                <AutoCompleteForm />
                {showModal && <AppModal modalTitle="Product Details" modalSize="lg" setShowModal={setShowModal} getModalContent={() => getProduct()} />}
            </ModalContext.Provider>
        </AutoCompleteContext.Provider>
    );
}

export default ProductAutoComplete;