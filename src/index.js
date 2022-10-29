import React from "react";
import ReactDOM from "react-dom/client";

import { AppProvider } from "./context/app.context";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
