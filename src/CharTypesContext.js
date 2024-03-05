import React, { createContext, useContext, useReducer } from "react";
const CharTypesContext = createContext();

export const useCharTypes = () => {
  return useContext(CharTypesContext);
};

export const CharTypesProvider = ({ children }) => {
  const inicialuserIncludings = {
    upper: false,
    lower: false,
    numbers: false,
    symbols: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "set upper":
        return { ...state, upper: action.value };
      case "set lower":
        return { ...state, lower: action.value };
      case "set numbers":
        return { ...state, numbers: action.value };
      case "set symbols":
        return { ...state, symbols: action.value };

      default:
        return state;
    }
  };
  const [userIncludings, dispatch] = useReducer(reducer, inicialuserIncludings);
  return (
    <CharTypesContext.Provider value={{ userIncludings, dispatch }}>
      {children}
    </CharTypesContext.Provider>
  );
};
