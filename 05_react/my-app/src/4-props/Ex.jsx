import React from "react";
//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.

function Greeting(params) {
  return <p>환영합니다, {params.name}님!</p>;
}

export function Props1() {
  let names = ["아무개", "홍길동", "철수", "영희"];
  let output = [];
  for (let i in names) {
    output.push(<Greeting key={i} name={names[i]} />);
  }

  return <>{output}</>;
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard(params) {
  return (
    <p>
      이름: {params.name} / 나이: {params.age} / 직업: {params.job}
    </p>
  );
}

export function Props2() {
  let users = [
    { name: "아무개", age: "미상", job: "불명" },
    { name: "홍길동", age: 39, job: "도사" },
  ];
  return (
    <>
      {users.map((v, i) => (
        <UserCard key={i} {...v} />
      ))}
    </>
  );
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.
function ItemList(params) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {params.items.map((v, i) => {
        return <li key={i}>{v}</li>;
      })}
    </ul>
  );
}

export function Props3() {
  return (
    <>
      <ItemList items={[1, 2, 3, 4]} />
      <ItemList items={["가", "나", "다", "라"]} />
    </>
  );
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function ClickButton(params) {
  function clickAlert() {
    alert("경고창");
  }
  return (
    <button type="button" onClick={clickAlert}>
      {params.text}
    </button>
  );
}

export function Props4() {
  return <ClickButton text="경고창 버튼" />;
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.
function InfoCard(params) {
  return (
    <div>
      <h1>{params.title}</h1>
      {params.children}
    </div>
  );
}

export function Props5() {
  return (
    <>
      <InfoCard title="제목">
        <h2>부제목</h2>
        <p>본문</p>
      </InfoCard>
    </>
  );
}
