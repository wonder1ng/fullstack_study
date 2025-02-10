import React from "react";
import * as E from "./12-shared-state/SharedState";
import * as E2 from "./12-shared-state/LiftingStateUp";
import * as Ex from "./12-shared-state/Ex";

function App() {
  return (
    <>
      <E.SharedState />
      <E2.LiftingStateUp />
      <hr />
      <Ex.Props1 />
      {/* <Ex.Props2 /> */}
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
