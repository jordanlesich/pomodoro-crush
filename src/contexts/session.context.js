import React, {createContext} from 'react';
import useToggle from '../Hooks/UseToggle'

export const SessionContext = createContext()

export const SessionProvider = props => {
   const [isPom, toggleIsPom] = useToggle(true);
   const [isRunning, toggleIsRunning] = useToggle(false);
   const [drawerOpen, toggleDrawer] = useToggle(false);
   const [modalOpen, toggleModal] = useToggle(false);
   


return(
    <SessionContext.Provider value={{
        isPom, 
        toggleIsPom, 
        isRunning, 
        toggleIsRunning, 
        drawerOpen,
        toggleDrawer,
        modalOpen,
        toggleModal
        }} >
            {props.children}
    </SessionContext.Provider>
);
}
