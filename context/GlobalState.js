import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

//Initial State
const initialState = {
  sidebarOpen: false,
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //Actions
  function toggleSidebar() {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen: state.sidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
