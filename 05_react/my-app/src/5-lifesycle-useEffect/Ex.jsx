import React, { Component, useEffect, useState } from "react";
import axios from "axios";
//npm i axios

// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.
export function Props1(params) {
  useEffect(() => {
    console.log("문제1 컴포넌트가 마운트되었습니다.");
  }, []);
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.
export function Props2() {
  let [count, setCount] = useState(0);
  function plus() {}
  useEffect(() => {
    console.log("문제2 컴포넌트가 업데이트되었습니다.");
  }, [count]);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        버튼 클릭 횟수: {count}
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용
export function Timer() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>timer: {count}초</div>;
}

export function Props3() {
  let [mount, setMount] = useState(true);

  return (
    <div
      onClick={() => {
        setMount(!mount);
      }}
    >
      {mount ? "타이머 작동" : "타이머 정지"}
      {mount && <Timer />}
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener
export function Getsize() {
  let [size, setSize] = useState(window.innerWidth);
  function getSize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
      console.log("윈도우 사이즈 언마운트.");
    };
  }, []);

  return size;
}

export function Props4() {
  let [mount, setMount] = useState(true);

  return (
    <div
      onClick={() => {
        setMount(!mount);
      }}
    >
      {mount ? "윈도우 크기: " : "언마운트"}
      {mount && <Getsize />}
    </div>
  );
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

// 감도 안 잡혀서 못 풀고 강사님 답안 필사
export function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API 호출
    // async/await 구문: JS에서 비동기 처리 시 사용 구문.
    // promise/then 구문: 상동
    const fetchData = async () => {
      // try catch 구문: 오류(예외) 처리 구문.
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // response: HTTP 통신의 결과(헤더 + 데이터)
        // json(): JSON 객체로 변환하는 함수.
        const result = await response.json();
        setData(result.slice(0, 10)); // 상위 10개 표시
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>데이터 로드</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>id: </b>
            {item.id}
            <br />
            <b>title: </b>
            {item.title}
            <br />
            <b>body: </b>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DataFetcherAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API 호출
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // axios는 json 객체 반환
        setData(response.data.slice(0, 10)); // 상위 10개 표시
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>데이터 로드</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>id: </b>
            {item.id}
            <br />
            <b>title: </b>
            {item.title}
            <br />
            <b>body: </b>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
