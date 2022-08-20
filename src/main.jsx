import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { ParallaxContext, ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
