import React from "react";
import * as E from "./7-hook/Hook";
import * as Ex from "./7-hook/Ex";
import * as C from "./7-hook/CustomHook";

function App() {
  return (
    <>
      <E.Counter1 />
      <E.Counter2 />
      <E.Counter3 />
      <E.Counter4 />
      <E.Counter5 />
      <E.Counter6 />
      <E.Counter7 />
      <hr />
      <Ex.Props1 />
      <Ex.Props2 />
      <Ex.Props3 />
      <hr />
      <C.Counter />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
