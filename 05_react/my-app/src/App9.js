import React from "react";
import * as E from "./9-conditional-render/ConditionalRender";
import * as Ex from "./9-conditional-render/Ex";

function App() {
  return (
    <>
      <E.Coinditionall isLoggedIn="false" />
      <E.LandingPage />
      <hr />
      <Ex.Props1 />
      <Ex.Notification />
      <Ex.Advertisement />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
