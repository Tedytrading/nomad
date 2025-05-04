import { createContext, useContext } from "react";

export interface GlobalProviderContextProps {
  registrationStatus: boolean;
}

// Create the context with a default value
export const GlobalContext = createContext<GlobalProviderContextProps | undefined>(undefined);

// Custom hook to use the GlobalContext
export const useGlobalProvider = (): GlobalProviderContextProps => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
