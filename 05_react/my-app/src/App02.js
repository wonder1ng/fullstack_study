import React from "react";
import Library from "./2-Jsx/Library";
import * as Ex from "./2-Jsx/Ex";

function App() {
  //   return <Library />;
  //   return;
  //   <MainApp>
  //     <Header />
  //     <Nav />
  //     <Main>
  //       <Section />
  //       <Aside />
  //     </Main>
  //     <Footer />
  //   </MainApp>;
  return (
    <>
      <Ex.Hello name="아무개" />
      <Ex.Sum num1="10" num2="5" />
      <p>
        <Ex.DrinkMachine price="1000" />
      </p>
      <p>
        <Ex.DrinkMachine price="2000" />
      </p>
      <p>
        <Ex.DrinkMachine price="0" />
      </p>
      <p>
        <Ex.Greeting hour="7" />
      </p>
      <p>
        <Ex.Greeting hour="14" />
      </p>
      <p>
        <Ex.Greeting hour="3" />
      </p>
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
