// unknown 타입: 모든 타입의 슈퍼셋(모집합)

let unknownVar: unknown;

// 모든 타입의 값이 들어갈 수 있다.
unknownVar = 123;
unknownVar = "hong";
unknownVar = () => {};

unknownVar = 123;
let num: number;
// tsx는 js로 작동함으로 js에서 오류여야 오류 발생
// tsc로 컴파일 시 ts에서 오류면 오류 발생
num = unknownVar;
// 타입 좁히기
if (typeof unknownVar == "number") {
  num = unknownVar;
  console.log("if 블록 안");
  console.log(num);
}

// any 타입
// 타입을 무시하는 타입(가급적 제한 상황에서만 사용)
let anyVar: any = 10;

// any 타입은 모든 타입 할당 가능
let num2: number = 20;
num2 = anyVar;
let str: string;
str = anyVar;

// *어떤 타입인지 모르지만 일단 값을 받을 경우

// void: 함수의 반환값 타입이 없을 때
function myFunc(): void {
  console.log("hello");
  return;
}
// 오류 발생
function myFunc2(): number {
  console.log("How are you");
  // return;
}

console.log(56346);
myFunc();
myFunc2();
myFunc();

// never: 어떤 값도 받을 수 없음. 무한 루프나 예외 발생만을 할 때 사용.
function myFunc3(): never {
  while (true) {}
}

function myFunc4(): never {
  throw new Error(); // 강제 오류 발생
}
