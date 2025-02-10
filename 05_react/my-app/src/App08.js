import React from "react";
import * as E from "./8-event/Event";
import * as Ex from "./8-event/Ex";

function App() {
  return (
    <>
      <E.Event1 />
      <E.Event2 />
      <hr />
      <Ex.Props1 />
      <Ex.Props2 />
      <Ex.Props3_1 />
      <Ex.Props3_2 />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
