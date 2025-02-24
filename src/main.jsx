import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={myStore}>
      <UserContextProvider>
        <ToastContainer />
        <App />
      </UserContextProvider>
    </Provider>
  </BrowserRouter>
);
