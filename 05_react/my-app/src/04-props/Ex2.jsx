import React, { useState } from "react";
// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.
function Greeting(params) {
  // let date = new Date();
  // let isMoring = date.getHours() >= 6 && date.getHours() < 12 ? true : false;
  return (
    <p>
      {params.isMoring
        ? "좋은 아침입니다, " + params.name + "님!"
        : "좋은 저녁입니다, " + params.name + "님!"}
    </p>
  );
}

export function Props1() {
  return (
    <>
      <Greeting name="아무개" isMoring={true} />
      <Greeting name="아무개" />
    </>
  );
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.
function UserCard({ name, age, children }) {
  // `UserCard({ name, age, children })`: `{ name, age, children } = params` 동일.
  return (
    <>
      <p>
        이름: {name} / 나이: {age}
      </p>
      {children}
    </>
  );
}
// function UserCard(params) {
//   return (
//     <>
//       <p>
//         이름: {params.name} / 나이: {params.age}
//       </p>
//       {params.children}
//     </>
//   );
// }

export function Props2() {
  let basicUsers = [
    {
      name: "아무개",
      age: 20,
    },
    {
      name: "홍길동",
      age: 30,
    },
  ];

  let [users, setUsers] = useState(basicUsers);
  function add(idx) {
    let newUsers = [...users];
    users[idx].age += 1;
    setUsers(newUsers);
  }

  return (
    <>
      {users.map((v, i) => {
        return (
          <UserCard key={i} {...v}>
            <button onClick={() => add(i)}>한 살 더 먹기</button>
          </UserCard>
        );
      })}
    </>
  );
}

// 문제 3: 객체 리스트 렌더링
// 목표: 객체로 구성된 리스트를 렌더링하고, 추가 정보를 중첩된 형태로 출력합니다.
// 요구사항:
// ItemDetailList라는 컴포넌트를 작성하세요.
// props로 전달받는 각 객체는 이름과 세부 정보를 포함합니다.
// 예시 객체 리스트:
// [
//   { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
//   { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
//   { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] }
// ]
// 각 항목은 <ul> 내부에 렌더링하며, 이름과 세부 정보도 중첩 리스트로 표시합니다.
// 예시 출력:
// - 사과
//   * 빨간색
//   * 달콤함
//   * 비타민 C
function ItemDetailList(params) {
  return (
    <div>
      <h2>{params.name}</h2>
      <ul>
        {params.details.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </div>
  );
}

export function Props3() {
  let arr = [
    { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
    { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
    { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] },
  ];

  return (
    <div>
      {arr.map((v, i) => {
        return <ItemDetailList key={i} {...v} />;
      })}
    </div>
  );
}

//문제 4: children을 활용한 강조 텍스트 컴포넌트
// 목표: 특정 부분의 텍스트를 강조할 수 있는 컴포넌트를 작성하세요.
// 요구사항:
// HighlightBox라는 컴포넌트를 작성하세요.
// 부모 컴포넌트에서 children을 사용하여 강조할 텍스트를 전달합니다.
// 예시)
// <p>
// 아래 텍스트에서 중요한 부분은 <HighlightBox>노란색으로 표시</HighlightBox>됩니다.
// </p>
// 강조할 부분은 노란색 배경과 굵은 텍스트로 표시하세요.
// 스타일 객체 { backgroundColor: "yellow", fontWeight: "bold", padding: "10px" }

function HighlightBox(params) {
  return (
    <span
      style={{ backgroundColor: "yellow", fontWeight: "bold", padding: "10px" }}
    >
      {params.children}
    </span>
  );
}

export function Props4() {
  return (
    <div>
      아래 텍스트에서 중요한 부분은 <HighlightBox>노란색으로 표시</HighlightBox>
      됩니다.
    </div>
  );
}
