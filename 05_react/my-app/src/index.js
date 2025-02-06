import React from "react";
import ReactDOM from "react-dom/client"; // client: FSR server:SSR(next.js)
import App1 from "./App1";
import App2 from "./App2";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App7 />
    <App6 />
    <App5 />
    <App4 />
    <App2 />
    <App1 />
  </>
);
