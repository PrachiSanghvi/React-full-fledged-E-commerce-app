import React,{createContext,useReducer} from 'react'
export const darkModeContext = createContext();

// Initaial state
const initialState = {darkMode:true};

// Reducer function
const themeReducer = (state,action) => {
  switch (action.type) {
    case "lightmode":
      return {darkMode:false};
    case "darkmode":
      return {darkMode:true};
    default:
      return state;
  }
}

// we meed to pass themeReducer function and inital state to useReducer hook
export function ThemeProvider(props) {
  const [state,dispatch] = useReducer(themeReducer,initialState);
  return <darkModeContext.Provider value={{state : state,dispatch:dispatch}}>{props.children}</darkModeContext.Provider>
}