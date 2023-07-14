import { createContext, useState } from "react";
import { getLocalStorage } from "../localStorage/localStorage";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState(getLocalStorage("theme") ?? true);
  return (
    <Context.Provider
      value={{
        setMode,
        mode,       
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
