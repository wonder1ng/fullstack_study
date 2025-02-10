// Ex.jsx
//연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)
// 목표:
// 사용자가 입력하는 숫자들을 배열에 추가하고, 배열의 평균값을 **useMemo**로
//   최적화하여 불필요한 재계산을 방지하세요.
// 힌트:
// 배열에 새로운 숫자가 추가될 때만 평균값을 재계산해야 합니다.

import { useState, useMemo, useCallback, useRef } from "react";

export function Props1() {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const avg = useMemo(() => {
    return arr.reduce((num1, num2) => num1 + num2, 0) / arr.length;
  }, [arr]);

  const handleArr = () => {
    if (!isNaN(inputValue)) {
      setArr([...arr, parseFloat(inputValue)]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleArr}>
        값 추가
      </button>
      <p>배열: {arr.join(", ")}</p>
      <p>배열의 평균 값: {avg}</p>
    </div>
  );
}

// 연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)
// 목표:
// 1. 숫자를 상태로 관리하고, 버튼을 클릭할 때마다 숫자가 1씩 증가합니다.
// 2. useCallback을 사용하여 버튼 클릭 핸들러가 컴포넌트가 리렌더링될 때마다 새로 생성되지 않도록 최적화하세요.
export function Props2() {
  const [num, setNum] = useState(0);

  const add = useCallback(() => {
    if (num < 11) setNum(num + 1);
  }, [num]);

  return (
    <div>
      <p>숫자: {num}</p>
      <button type="button" onClick={add}>
        클릭 시 숫자 1 증가
      </button>
    </div>
  );
}

// 연습문제 3: 입력창 초기화하기 (useRef)
// 목표:
// 사용자가 입력한 텍스트를 버튼 클릭 시 초기화하고, 입력창에 포커스를 다시 설정합니다.
// **useRef**를 사용하여 입력창을 제어하세요.
// 힌트:
// 입력창에 접근하기 위해 **useRef**로 참조를 생성하세요.
// **inputRef.current.value**를 이용해 입력 값을 초기화하고, **inputRef.current.focus()**로 포커스를 설정합니다.

export function Props3() {
  const inputRef = useRef(null);

  const clear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <p>입력 창 초기화</p>
      <input ref={inputRef} type="text" />
      <button onClick={clear}>초기화 및 포커스</button>
    </div>
  );
}
