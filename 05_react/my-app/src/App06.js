import React from "react";
import * as E from "./6-state/State";
import * as Ex from "./6-state/Ex";

function App() {
  return (
    <>
      <E.LikeButton />
      <hr />
      <Ex.Props1 />
      <Ex.Props2 />
      <Ex.Props3 />
      <Ex.Props4 />
      <Ex.Props5 />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
