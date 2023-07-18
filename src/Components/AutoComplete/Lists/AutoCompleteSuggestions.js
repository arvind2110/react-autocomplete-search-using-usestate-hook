import { useErrorBoundary } from "react-error-boundary";
import React, { memo, useContext, useEffect, useState } from "react";
import AutoCompleteContext from "../Context/AutoCompleteContext";
import AutoCompleteSuggestionsContext from "../Context/AutoCompleteSuggestionsContext";
import ModalContext from "../../Common/Modal/Context/ModalContext";
import useDebaounce from "../../Common/Hooks/useDebounce";

const AutoCompleteSuggestions = ({ searchText, setSearchText }) => {
    const { showBoundary } = useErrorBoundary();

    const {getUrl, getSuggestionComponent} = useContext(AutoCompleteContext);
    const {showItemDetails} = useContext(ModalContext);
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const debounceSearchText = useDebaounce(searchText, 500);

    useEffect(() => {
        setIsLoading(true);
        fetch(getUrl(debounceSearchText)).then((response) => {
            return response.json();
        }).then((response) => {
            setSuggestions(response);
        }).catch((error) => {
            showBoundary(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [debounceSearchText, getUrl, showBoundary]);
    
    const showItem = (itemId) => {
        setSearchText("");
        setSuggestions([]);
        showItemDetails(itemId);
    }

    return (
        <AutoCompleteSuggestionsContext.Provider value={{showItem : showItem}}>
            { getSuggestionComponent(suggestions, isLoading) }
        </AutoCompleteSuggestionsContext.Provider>
    );
}

export default memo(AutoCompleteSuggestions);