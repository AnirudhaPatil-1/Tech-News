import React, {useContext, createContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
   return (
    <AppContext.Provider value={"Thapa Technical"}>
        {children}
    </AppContext.Provider>
   )
}

const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

// export {AppContext, AppProvider};
export {AppContext, AppProvider, useGlobalContext}