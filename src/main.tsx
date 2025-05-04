import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./providers/globalProvider/GlobalProvider.tsx";
import { APIProvider } from "./providers/api/APIProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <APIProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </APIProvider>
  </StrictMode>
);
