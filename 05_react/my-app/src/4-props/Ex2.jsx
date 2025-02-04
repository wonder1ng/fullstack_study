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
  let date = new Date();
  //   let isMoring = date.getHours() >= 6 && date.getHours() < 12 ? true : false;
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
function UserCard(params) {
  return (
    <>
      <p>
        이름: {params.name} / 나이: {params.age}
      </p>
      {params.children}
    </>
  );
}

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
