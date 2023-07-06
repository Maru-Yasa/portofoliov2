import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { ParallaxContext, ParallaxProvider } from "react-scroll-parallax";
import DocumentMeta from "react-document-meta";

const meta = {
    title: 'MaruYasa Portofolio',
    description: 'Fullstack Web Developer Enthusiast | PHP, NodeJS, React',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'maruyasa,maru,yasa,portofolio'
      }
    }
};

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </DocumentMeta>
  </React.StrictMode>,
  document.getElementById("root")
);
