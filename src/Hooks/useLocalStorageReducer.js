import {useReducer, useEffect} from 'react';

function useLocalStorageReducer(key, defaultVal, reducer){
    //trys for any local storage in the browser, 
    //places in a default value if not found
    //whatever gets used is paired with the reducer hook passed in above 

    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val ;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e){
            val = defaultVal
        }
        return val
    });
    
    //useEffect to update local Storage once state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);


    //returns the values and the dispatch methods to change them with
    return[state, dispatch];

}

export {useLocalStorageReducer};