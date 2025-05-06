import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./providers/globalProvider/GlobalProvider.tsx";
import { APIProvider } from "./providers/api/APIProvider.tsx";
import { isTMA } from "@telegram-apps/sdk-react";

import { BrowserRouter } from "react-router-dom";

function RootComponent() {
  if (isTMA() === false) {
    return <div>Not running in Telegram</div>;
  }

  return (
    <BrowserRouter>
      <APIProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </APIProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
