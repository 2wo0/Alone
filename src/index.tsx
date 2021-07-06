import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";
import "antd/dist/antd.css";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
