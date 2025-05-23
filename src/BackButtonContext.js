import { createContext, useContext, useState } from "react";

const BackButtonContext = createContext();

export function BackButtonProvider({ children }) {
  const [isBackButtonPressed, setIsBackButtonPressed] = useState(false);

  return (
    <BackButtonContext.Provider value={{ isBackButtonPressed, setIsBackButtonPressed }}>
      {children}
    </BackButtonContext.Provider>
  );
}

export function useBackButton() {
  return useContext(BackButtonContext);
}