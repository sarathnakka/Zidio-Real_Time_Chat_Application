import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";

const rootElement = document.getElementById("root");

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderApp();

reportWebVitals();
