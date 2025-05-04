import * as fetchFunctions from "./QueryFunctions";
import * as mutationFunctions from "./MutationFunctions";
import { cacheExchange, createClient, fetchExchange } from "urql";
import { createContext, ReactNode, useContext } from "react";

export const client = createClient({
  url: "https://backnqr-production.up.railway.app/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

type APIContextType = {
  queries: typeof fetchFunctions;
  mutations: typeof mutationFunctions;
};

const APIContext = createContext<APIContextType | undefined>(undefined);

export const APIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contextValue: APIContextType = {
    queries: fetchFunctions,
    mutations: mutationFunctions,
  };

  return <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>;
};

export const useAPI = (): APIContextType => {
  const context = useContext(APIContext);
  if (!context) {
    throw new Error("useAPI must be used within an APIProvider");
  }
  return context;
};
