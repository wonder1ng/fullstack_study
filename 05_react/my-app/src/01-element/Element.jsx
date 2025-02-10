// 리액트 엘리먼트(React Element)란?
// 리액트 엘리먼트는 리액트 앱의 UI를 구성하는 가장 작은 단위입니다. 엘리먼트는 화면에 표시될 내용을 설명하는 자바스크립트 객체로, 컴포넌트를 생성하고 렌더링하는 데 사용됩니다.

// 리액트 엘리먼트는 **불변(immutable)**이며 한 번 생성되면 그 내용을 변경할 수 없습니다. 대신 새로운 엘리먼트를 생성하여 화면의 변화를 반영합니다.

// 리액트 엘리먼트의 특징
// 1. 불변성: 엘리먼트는 한 번 생성되면 변경할 수 없습니다.
// 2. 가볍고 빠름: 가상 DOM을 사용하여 변경 사항을 효율적으로 관리합니다.
// 3. UI의 구성 단위: 컴포넌트 내에서 리액트 엘리먼트는 HTML 태그처럼 사용됩니다.

import React from "react";
// React 17 이상에서는 import 하지 않아도 JSX 사용 가능

const E1 = <h1 className="greeting">리액트 엘리먼트1입니다.</h1>;
export const E2 = React.createElement(
  "h1", // type
  { className: "greeting" }, // properpties: 없으면 null
  "리액트 엘리먼트2입니다." // [...children]
);
// JSX에서 JS 사용 시 {} 사용.
// JS에서 style은 KV객체 사용.
export const E3 = <h1 style={{ color: "blue" }}>엘리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
export const E4 = (
  <ul>
    <li>사과</li>
    <li>바나나</li>
    <li>포도</li>
  </ul>
);

export const E5 = (
  <ul>
    {fruits.map((item, index, array) => {
      // {JS 값 표현식}
      // 리액트의 리스트(목록)은 key 필요.
      return <li key={index}>{item}</li>;
      //   return <li>{item}</li>;
    })}
  </ul>
);

// 소괄호 없이 return: return 뒤에 바로 JSX나 값이 올 경우
// 소괄호로 return: 함수 컴퍼넌트로 return, 여러 요소를 return
function handleClick() {
  alert("버튼이 클릭되었습니다.");
}

export const E6 = (
  <>
    <h>이벤트처리</h>
    <button onClick={handleClick}>클릭하세요.</button>
  </>
);
// export const E6 = (
//   <div>
//     <h>이벤트처리</h>
//     <button onClick={handleClick}>클릭하세요.</button>
//   </div>
// );

// props로 데이터 전달하기
export function Hello1(props) {
  return <h1>안녕하세요. {props}님!</h1>;
}
export function Hello2(props) {
  return <h1>안녕하세요. {props.name}님!</h1>;
}

export function Button(props) {
  return (
    // <button style={{ color: `${props.color}` }}>
    <button style={{ color: props.color }}>
      {/* JSX 코멘트: children은 props의 기본 속성으로 컴퍼넌트 하위 요소 의미 */}
      <b>{props.children}</b>
    </button>
  );
}
export function ConfirmDialog(props) {
  return (
    <div>
      <p>확인버튼을 눌러주세요.</p>
      <Button color="green">
        <span>확인</span> <br />
        <span>버튼</span>
      </Button>
    </div>
  );
}

// 내보내기 할 하나의 컴포넌트(오소)
export default E1;
// export { E1, E2 };
