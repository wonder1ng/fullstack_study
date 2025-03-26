import React from "react";
// 특정 버전부터 React는 import 하지 않아도 사용됨

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>이 첵은 총 {props.numOfPage}페이지로 이뤄져 있습니다.</h2>
    </div>
  );
}

export default Book;
