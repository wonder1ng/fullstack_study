//Lifecycle.jsx
// 리액트 라이프사이클의 개념
// 리액트의 라이프사이클은 컴포넌트가 생성되고, 업데이트되며,
// 제거될 때 일어나는 일련의 과정을 의미합니다.
// 클래스형 컴포넌트에서 더 명확하게 사용되었지만,
// 함수형 컴포넌트에서는 useEffect Hook을 통해 비슷한 동작을 구현할 수 있습니다.

// 리액트 컴포넌트 라이프사이클의 3단계
// 1. 마운트 (Mount): 컴포넌트가 처음 DOM에 추가될 때 발생하는 단계
// 2. 업데이트 (Update): 상태나 props가 변경되어 컴포넌트가 다시 렌더링될 때 발생하는 단계
// 3. 언마운트 (Unmount): 컴포넌트가 DOM에서 제거될 때 발생하는 단계

// 클래스형 컴포넌트의 주요 라이프사이클 메서드
// componentDidMount(): 컴포넌트가 처음 렌더링된 후 실행
// componentDidUpdate(): 컴포넌트가 업데이트된 후 실행
// componentWillUnmount(): 컴포넌트가 언마운트(제거)되기 직전에 실행

import React, { Component, useEffect, useState } from "react";

export class LifecycleClass extends Component {
  // 자식 생성자 함수
  constructor(props) {
    super(props); // 부모 생성자 함수 호출
    this.state = {
      // 상태 변수 선언
      count: 0,
    };
  }

  // 마운트 직후 호출.
  componentDidMount() {
    console.log("클래스 컴퍼넌트가 마운트되었습니다.");
  }
  // 언마운트 직후 호출
  componentWillUnmount() {
    console.log("클래스 컴퍼넌트가 언마운트되었습니다.");
  }
  // 상태나 props 변경 직후 호출(update)
  componentDidUpdate() {
    console.log(
      "클래스 컴퍼넌트가 업데이트되었습니다." + `${this.state.count}`
    );
  }
  render() {
    return (
      <div>
        <h1>리액트 라이프사이클(클래스형)</h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            // setState: 클래스형 컴퍼넌트의 상태 변경 함수
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// 함수형 컴퍼넌트
// 함수형 컴포넌트에서는 useEffect Hook로 라이프사이클을 관리
// useEffect는 다음과 같은 역할을 할 수 있습니다:
// useEffect(() => {}, []): 컴포넌트가 마운트될 때 실행
// useEffect(() => {}, [state]): 의존성 배열이 변경될 때 실행
// return () => {}: 컴포넌트가 언마운트될 때 실행 (클린업 함수)

export function LifecycleFunc() {
  // [상태 변수, 상태 설정 함수] = 초기 값
  const [count, setCount] = useState(0);

  // 마운트 & 언마운트
  useEffect(() => {
    console.log("함수 컴퍼넌트가 마운트되었습니다.");
    return () => {
      console.log("함수 컴퍼넌트가 언마운트되었습니다.");
    };
  }, []); // 빈 배열 넣으면 마운트/언마운트 시 한 번만 호출
  // 업데이트
  useEffect(() => {
    console.log("함수 컴퍼넌트가 업데이트되었습니다.");
  }, [count]); // 의존성 상태 변수 배열을 설정

  return (
    <div>
      <h1>리액트 라이프사이클(함수형 컴퍼넌트)</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

// 부모 컴포넌트
export function Lifecycle() {
  //        상태 변수       상태 설정 함수          초기 값
  const [showComponent, setShowComponent] = useState(true);
  const [showComponentFunc, setShowComponentFunc] = useState(true);

  // 조건부 렌더링
  // 1. if else
  // 2. 삼항 연산자
  // 3. 논리 연산자
  return (
    <div style={{ padding: "20px" }}>
      {showComponent && <LifecycleClass />}
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴퍼넌트 제거" : "컴퍼넌트 추가"}
      </button>
      <br />
      {showComponentFunc && <LifecycleFunc />}
      <button
        onClick={() => {
          setShowComponentFunc(!showComponentFunc);
        }}
      >
        {showComponentFunc ? "컴퍼넌트 제거" : "컴퍼넌트 추가"}
      </button>
    </div>
  );
}
