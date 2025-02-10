import React from "react";
import ReactDOM from "react-dom/client"; // client: FSR server:SSR(next.js)
import App1 from "./App01";
import App2 from "./App02";
import App4 from "./App04";
import App5 from "./App05";
import App6 from "./App06";
import App7 from "./App07";
import App8 from "./App08";
import App9 from "./App09";
import App10 from "./App10";
import App11 from "./App11";
import App12 from "./App12";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App12 />
    <App11 />
    <App10 />
    <App9 />
    <App8 />
    <App7 />
    <App6 />
    <App5 />
    <App4 />
    <App2 />
    <App1 />
  </>
);
