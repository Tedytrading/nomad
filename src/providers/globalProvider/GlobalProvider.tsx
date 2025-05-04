import React, { useState, ReactNode, useEffect } from "react";
import { GlobalContext, GlobalProviderContextProps } from "./GlobalProviderContext";
import { isTMA } from "@telegram-apps/sdk-react";
import { useAPI } from "../api/APIProvider";
import { RequestHandler } from "../api/RequestHandler";

const exampleUser = {
  TgUserId: "1234422",
  uniqRefId: "bb98675d",
  pass: "a453232a",
  email: "test4@mail.com",
  uniqName: "test4",
  code: "817b53",
};

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  if (isTMA() === false) {
    return <div>Not running in Telegram</div>;
  }

  const { queries } = useAPI();
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => 2000);
      const meResponse = await RequestHandler(queries.me());
      console.log("Registration status response:", meResponse);

      if (meResponse) {
        switch (meResponse.error) {
          case "registration_not_completed":
            console.log("Did this one run");
            setRegistrationStatus(false);
            break;

          case "email_not_verified":
            setRegistrationStatus(false);
            break;

          default:
            setRegistrationStatus(true);
            break;
        }
      }

      setLoadingUser(false);
    })();
  }, []);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  const value: GlobalProviderContextProps = {
    registrationStatus,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
