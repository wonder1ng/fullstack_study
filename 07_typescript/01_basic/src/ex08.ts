// 타입 단언(Assertion): 형 변환과 유사

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 형 단언(호가정) or 변환
person.name;
person.age;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "멍멍이",
  town: "서울",
  color: "흰색",
} as Dog;

console.log(dog);

// 생성 시 오류
let dog2: Dog = {
  name: "멍멍이2",
  town: "서울2",
  color: "흰색2",
};
console.log(dog2);

// const 선언(읽기 전용)
let cat = {
  name: "야옹이",
  color: "brown",
} as const;
cat.name = "길야옹이";
console.log(cat);

type Post = {
  title: string;
  content?: string; // 없을 수 있다.
};
let post: Post = {
  title: "글내용",
};
// Cannot read properties of undefined (reading "length")
// ?: 옵셔널(null일 수도) undefined
// !: Not Null 단언
const len: number = post.content?.length;
const len2: number = post.content!;
console.log(len);
console.log(len2);
