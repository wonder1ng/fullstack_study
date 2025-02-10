import React from "react";
import * as E from "./5-lifesycle-useEffect/Lifecycle";
import * as Ex from "./5-lifesycle-useEffect/Ex";

function App() {
  return (
    <>
      <E.LifecycleClass />;
      <E.Lifecycle />;
      <hr />
      <Ex.Props1 />
      <Ex.Props2 />
      <Ex.Props3 />
      <Ex.Props4 />
      <Ex.DataFetcher />
      <Ex.DataFetcherAxios />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
