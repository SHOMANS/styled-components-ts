import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./Utils/Theme";
import App from "./App";
import GlobalStyle from "./GlobalStyles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
