import React, { useState } from "react";
// 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
// 두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서
// 실시간으로 계산하여 출력합니다.
function Num1({ num, setter }) {
  return (
    <div>
      <h3>숫자 1: </h3>
      <input
        type="text"
        value={num}
        onChange={(e) => setter(Number(e.target.value))}
      />
    </div>
  );
}
function Num2({ num, setter }) {
  return (
    <div>
      <h3>숫자 2: </h3>
      <input
        type="text"
        value={num}
        onChange={(e) => setter(Number(e.target.value))}
      />
    </div>
  );
}

export function Props1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <Num1 num={num1} setter={setNum1} />
      <Num2 num={num2} setter={setNum2} />
      <div>
        <p>합계: {num1 + num2}</p>
      </div>
    </div>
  );
}

// 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
// 리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면
// 선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.
// const items = ["사과", "바나나", "오렌지", "수박", "포도"];
// 요구사항
// 항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
// 이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
// 상태는 부모 컴포넌트에서 관리합니다.
