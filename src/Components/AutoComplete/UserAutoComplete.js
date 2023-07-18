import React, { useState } from 'react';
import Loader from "../Common/Loader/Loader";
import AutoCompleteContext from "./Context/AutoCompleteContext";
import AutoCompleteForm from "./Forms/AutoCompleteForm";
import UserSuggestions from "./Lists/UserSuggestions";
import ModalContext from '../Common/Modal/Context/ModalContext';
import AppModal from "../Common/Modal/Modal";
import User from './Lists/ListItems/User';

const UserAutoComplete = () => {
    const title  = "Search Users";
    const apiUrl = process.env.USER_SEARCH_API;
    
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(null);

    // Get API url
    const getUrl = (searchText) => {
        return apiUrl + searchText;
    }

    const getSuggestionComponent = (suggestions, isLoading) => {
        return (
            isLoading
            ? <Loader />
            : <UserSuggestions suggestions={suggestions?.users} />
        );
    }

    const showUserDetails = (userId) => {
        setShowModal(true);
        setUserId(userId);
    }

    const getUser = () => {
        return <User userId={userId} />;
    }

    const contextValue = {
        title: title,
        getUrl : getUrl,
        getSuggestionComponent: getSuggestionComponent
    }

    const modalContextValue = {
        showItemDetails: showUserDetails
    }

    return (
        <AutoCompleteContext.Provider value={contextValue}>
            <ModalContext.Provider value={modalContextValue}>
                <AutoCompleteForm />
                {showModal && <AppModal modalTitle="User Details" modalSize="lg" setShowModal={setShowModal} getModalContent={() => getUser()} />}
            </ModalContext.Provider>
        </AutoCompleteContext.Provider>
    );
}

export default UserAutoComplete;