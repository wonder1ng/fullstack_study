import React from "react";
import ReactDOM from "react-dom/client"; // client: FSR server:SSR(next.js)
import * as Ex1 from "./Exs/Ex01";
import * as Ex12 from "./Exs/Ex01-02";
import * as Ex2 from "./Exs/Ex02";
import * as Ex3 from "./Exs/Ex03";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Ex1.Semantic /> */}
    {/* <Ex12.Semantic /> */}
    {/* <Ex2.DogBlog /> */}
    <Ex3.Recommand />
  </>
);
