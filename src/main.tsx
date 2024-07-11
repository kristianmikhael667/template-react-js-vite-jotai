import React from "react";
import { Provider } from "jotai";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { ThemeProvider } from "./utils/contexts/theme";
import Routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <Provider>
      <Routes />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
