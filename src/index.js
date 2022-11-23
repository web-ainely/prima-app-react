import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout component/Layout";
import { ReactComponent as LogoReact } from './logo.svg';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
    <img src={LogoReact} alt="logo di React" />
  </React.StrictMode>
);
