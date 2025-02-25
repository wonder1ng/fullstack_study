// 배열 타입
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "typescript"];
let boolArr: Array<boolean> = [true, false];
let boolArr2: boolean[] = [true, false];

// 배열에 들어가는 요소들의 타입이 다른 겨웅
// 유니언(|): 타입의 합집합
let multiArr: (number | string)[] = [1, "hello"];
let multiArr2: Array<number | string> = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플: 길이와 타입이 고정된 배열(ts에만 존재)
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "string", true];

// 사용례
// rlfdldhk xkdlq rhwjd tl
const users: [string, number][] = [
  ["홍길동", 20],
  ["사임당", 30],
];
users.push([50, "이순신"]); // 타입이 다름
users.push(["변사또", 40]);
users.push(["강감찬", 60, true]); // 길이가 다름
// 경고만 띄우고 작동은 함(실행은 js로 되기 때문에?)
console.log(users);

const [count, setCount] = useState(0);
function useState(init: number) {
  return [0, () => {}];
}
