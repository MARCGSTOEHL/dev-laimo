import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "feather-icons/dist/feather";
import { BrowserRouter } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: wird von palette.primary.main berechnet,
      main: '#FFF',
      // dark: wird von palette.primary.main berechnet,
      // contrastText: wird von palette.primary.main berechnet,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
