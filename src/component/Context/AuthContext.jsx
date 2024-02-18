import React, { useReducer } from 'react';
import { createContext } from 'react';


export const UserContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "CONNECT":
      return { ...state, user: action.payload };
    case "DISCONNECT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

if (!state.user) {
    const user = JSON.parse(localStorage.getItem("Wallet"));
    if (user) {
      dispatch({ type: "CONNECT", payload: user });
    }
  }

  // console.log("States", state);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
