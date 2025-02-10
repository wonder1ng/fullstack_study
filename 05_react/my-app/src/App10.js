import React from "react";
import * as E from "./10-list/List";
import * as Ex from "./10-list/Ex";

function App() {
  return (
    <>
      <E.NumberList />
      <E.UserList />
      <E.CategoryList />
      <E.TodoApp />
      <hr />
      <Ex.TaskList />
      <Ex.ProductList />
      <Ex.DynamicList />
      <Ex.GetJson />
      <Ex.SetJson />
      <hr style={{ border: "2px solid red" }} />
    </>
  );
}

export default App;
