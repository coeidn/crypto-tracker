import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
