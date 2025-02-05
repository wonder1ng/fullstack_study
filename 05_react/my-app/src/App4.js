import React from "react";
import * as E from "./4-props/Props";
import * as Ex from "./4-props/Ex";
import * as Ex2 from "./4-props/Ex2";

function App() {
  return (
    <>
      <E.Props1 />
      <E.Props2 />
      <E.Props3 />
      <E.Props4 />
      <E.Props5 />
      <hr />
      <Ex.Props1 />
      <Ex.Props2 />
      <Ex.Props3 />
      <Ex.Props4 />
      <Ex.Props5 />
      <hr />
      <Ex2.Props1 />
      <Ex2.Props2 />
      <Ex2.Props3 />
      <Ex2.Props4 />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
