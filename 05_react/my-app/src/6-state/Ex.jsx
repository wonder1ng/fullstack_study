import React, { useState } from "react";
//Ex.jsx
// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트
export function Props1() {
  const [value, setValue] = useState("");

  const change = (input) => {
    setValue(input.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <p>{value}</p>
      <p>입력 값은 위에 출력됩니다.</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.
export function Props2() {
  const [color, setColor] = useState(0);
  const colors = ["red", "green", "blue"];

  return (
    <button
      type="button"
      style={{ background: colors[color] }}
      onClick={() => setColor((color + 1) % 3)}
    >
      클릭 시 색상 변경
    </button>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용
export function Props3() {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <label htmlFor="input1">{check ? "ON" : "OFF"}</label>
      <input
        name="input1"
        type="checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      ></input>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.
export function Props4() {
  const [num, setNum] = useState(0);

  return (
    <div
      onClick={() => {
        if (num < 10) setNum(num + 1);
      }}
    >
      클릭 시 10까지 증가: {num}
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]
export function Props5() {
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="input2">입력 시 아래에 리스트가 추가 됩니다.</label>
      <input
        name="input2"
        type="text"
        value={value}
        onChange={(str) => setValue(str.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setValue(value.trim());
          if (value !== "") {
            arr.push(value);
            setValue("");
          }
        }}
      >
        제출
      </button>
      <ul>
        {arr.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </div>
  );
}
