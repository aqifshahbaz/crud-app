import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial State

const initialState = {
  users: [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ],
};

//create context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const removeUserID = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const addUserID = (user) =>{
    dispatch({
        type: 'ADD_USER',
        payload: user
    });
  };
  const editUserID = (user) =>{
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{ users: state.users, removeUserID ,addUserID, editUserID}}>
      {children}
    </GlobalContext.Provider>
  );
};
