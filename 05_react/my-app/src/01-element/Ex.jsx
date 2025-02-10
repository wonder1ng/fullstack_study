import React from "react";

// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

const user = {
  firstName: "김",
  lastName: "민수",
  age: 30,
};

const Namecard = (
  <p>
    {user.firstName}
    {user.lastName}
  </p>
);

//연습문제2: props를 이용해 이름과 나이 출력하기
// 목표: props로 전달받은 이름과 나이를 사용자 정의 컴퍼넌트에 출력한다.
// 요구사항
// 1. Greeting 함수형 컴퍼넌트를 만들고, props로 전달받은 name과 age를
//   출력한다.
// 2. 출력양식 : 안녕하세요, 홍길동님! 당신의 나이는 25살입니다.

function Greeting(props) {
  return (
    <p>
      안녕하세요, {props.name}님! 당신의 나이는 {props.age}살입니다.{" "}
    </p>
  );
}
const ans2 = () => {
  return <Greeting name={user.firstName + user.lastName} age={user.age} />;
};

//연습문제3: 다음의 객체배열의 데이터를 출력하시오.
//목표: props로 전달받은 객체 배열의 데이터를 조작할 수 있다.
//요구사항
// 1. 상품이름 - 가격(원)으로 출력한다.
// 출력 예) 1. 노트북 - 8000원
//          2. 스마트폰 - 4000원
const products = [
  { id: 1, name: "노트북", price: 8000 },
  { id: 2, name: "스마트폰", price: 4000 },
  { id: 3, name: "태블릿", price: 6000 },
];

const ans3 = (
  <ul>
    {products.map((i) => {
      return (
        <li key={i + 1}>
          {i.id}. {i.name} - {i.price}원
        </li>
      );
    })}
  </ul>
);

export { Namecard, ans2, ans3 };
