// default는 이름만, 외는 중괄호 안에 기입
import E1, { E2, E3, E4, E5 } from "./1-element/Element";
// default는 *에 포함되지 않음.
// import E1, * as E from "./1-element/Element";
import * as E from "./1-element/Element";
import * as Ex from "./1-element/Ex";

// return은 최종적으로 html로 출력된다는 걸 유념.
function App() {
  // return E1;

  // `return value`: JSX로 렌더링하지 않고 React 컴퍼넌트 자체 또는 JSX 요소로 작성된 변수 반환.
  // return E.Hello1("홍길동");

  // `return <function />`: react의 함수(클래스)형 컴포넌트를 JSX로 문법으로 호출하여 반환.
  // return <E.Hello2 name="아무개" />;

  // 여러 값을 return 하고 싶을 때는 태그 안에 중괄호나 태그로 입력
  return (
    <>
      {E1}
      {E2}
      {E3}
      {E4}
      {E.E5}
      {E.E6}
      {E.Hello1("홍길동")}
      <E.Hello2 name="아무개" />
      <E.ConfirmDialog />
      <hr />
      {Ex.Namecard}
      <Ex.ans2 />
      {Ex.ans3}
    </>
  );
}

export default App;
