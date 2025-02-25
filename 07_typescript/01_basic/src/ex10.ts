// 함수 타입

function func1(a: number, b: number): number {
  return a + b;
}

// 반환타입 생략: 타입 추론
function func2(a: number, b: number) {
  return a + b;
}

// 매개변수 기본값
function func3(name: string = "홍길동"): string {
  return name;
}

console.log(func3());

// 선택적 매개 변수
function func4(name: string, age?: number) {
  return name;
}
console.log(func4("홍길동"));

// 나머지 매개 변수
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((value) => (sum += value));
  return sum;
}

console.log(getSum(1, 2, 3));

// 함수 타입 표현식
const add = (a: number, b: number) => a + b;
const sub = (a: number, b: number) => a - b;
const mul = (a: number, b: number) => a * b;
const div = (a: number, b: number) => a / b;

// Operation으로 미리 형식 선언했기에 형식 지정 불요
type Operation = (a: number, b: number) => number;
const add2: Operation = (a, b) => a + b;
const sub2: Operation = (a, b) => a - b;

// 호출 시그니처
type Operation2 = {
  (a: number, b: number): number;
};
const add3: Operation2 = (a, b) => a + b;
