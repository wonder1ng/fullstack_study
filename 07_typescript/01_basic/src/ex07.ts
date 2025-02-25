// 합집합 타입 - Union
let a: string | number | boolean;
a = 123;
a = "hong";
a = true;

let arr: (string | number | boolean)[] = [123, "hong", true];

// 객체 타입
type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  lang: string;
};
type Union1 = Dog | Person;
let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  lang: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  lang: "",
};
// Dog나 Person의 조건 중 1개는 만족해야 함
let union4: Union1 = {
  lang: "",
};

// 교집합 타입 - Intersection
let neverVar: string & number; // 교집합 부재 시 never로 추정

type Intersection = Dog & Person;

let inter1: Intersection = {
  name: "",
  color: "",
  lang: "",
};
// 전 조건 만족해야 함
let inter2: Intersection = {
  name: "",
  lang: "",
};

// 갹체 타입의 호환성
let dog: Dog;
let person: Person;

dog = inter1; // 호환됨
person = inter1; // 호환됨
inter1 = dog; // 호환 안 됨
inter1 = person; // 호환 안 됨
