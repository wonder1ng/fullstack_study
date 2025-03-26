import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    // return에 여러 컴포넌트가 있으면 괄호로 묶고 최상위는 1개의 태그로 묶어야 함
    <>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </>
  );
}

export function SmallLibrary(props) {
  // return에 1개의 컴포넌트뿐이면 괄호 불요
  return <Book name="처음 만난 HTML" numOfPage={200} />;
}

export default Library;
