import { createContext, useContext } from "react";
import { RegisterData } from "./GlobalProvider";
import { AuthResponse } from "../api/QueryFunctions";

export interface GlobalProviderContextProps {
  registrationStatus: {
    emailNotVerified: boolean;
    registrationNotCompleted: boolean;
    hasCompletedRegistration: boolean;
  };
  setRegistrationStatus: React.Dispatch<
    React.SetStateAction<{
      emailNotVerified: boolean;
      registrationNotCompleted: boolean;
      hasCompletedRegistration: boolean;
    }>
  >;
  userInputInformation: RegisterData;
  setUserInputInformation: React.Dispatch<React.SetStateAction<RegisterData>>;
  currentUser: AuthResponse["user"] | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<AuthResponse["user"] | null>>;
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
