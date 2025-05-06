import React, { useState, ReactNode, useEffect } from "react";
import { GlobalContext, GlobalProviderContextProps } from "./GlobalProviderContext";
import { useAPI } from "../api/APIProvider";
import { RequestHandler } from "../api/RequestHandler";
import { AuthResponse } from "../api/QueryFunctions";

export interface RegisterData {
  email: string;
  username: string;
  termsAccepted: boolean;
}

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { queries } = useAPI();
  const [registrationStatus, setRegistrationStatus] = useState({
    emailNotVerified: false,
    registrationNotCompleted: false,
    hasCompletedRegistration: false,
  });
  const [loadingUser, setLoadingUser] = useState(true);
  const [userInputInformation, setUserInputInformation] = useState<RegisterData>({
    email: "",
    username: "",
    termsAccepted: false,
  });
  const [currentUser, setCurrentUser] = useState<AuthResponse["user"] | null>(null);

  useEffect(() => {
    (async () => {
      const meResponse = await RequestHandler(queries.me());
      if (meResponse) {
        switch (meResponse.error) {
          case "registration_not_completed":
            setRegistrationStatus((prev) => ({
              ...prev,
              registrationNotCompleted: true,
            }));
            break;

          case "email_not_verified":
            setRegistrationStatus((prev) => ({
              ...prev,
              emailNotVerified: true,
            }));
            break;

          default:
            setRegistrationStatus({
              emailNotVerified: true,
              registrationNotCompleted: true,
              hasCompletedRegistration: true,
            });
            break;
        }
      }

      if (meResponse.success) {
        setCurrentUser(meResponse.user);
      }

      setLoadingUser(false);
    })();
  }, []);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  const value: GlobalProviderContextProps = {
    registrationStatus,
    setRegistrationStatus,
    userInputInformation,
    setUserInputInformation,
    currentUser,
    setCurrentUser,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
