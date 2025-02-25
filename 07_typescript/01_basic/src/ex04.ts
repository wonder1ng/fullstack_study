import { log } from "console";
import { crc32 } from "zlib";

// 타입 별칭(Type Alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
  phone: string;
};

let user2: User = {
  id: 2,
  name: "사임당",
  nickname: "dang",
  birth: "2000.01.01",
  location: "한양",
  phone: "010-1111-2222",
};

let user1: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
  phone: string;
} = {
  id: 1,
  name: "홍길동",
  nickname: "hong",
  birth: "2000.01.01",
  location: "한양",
  phone: "010-1111-2222",
};

// 인덱스 시그니쳐
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // 200개라면?
};

//인덱스 시그니쳐
type CountryCodes2 = {
  [key: string]: string;
};
let countryCodes2: CountryCodes2 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // Japan: 123 // 조건에 맞지 않아 오류 발생
};
// console.log(countryCodes2);
type CountryCodes3 = {
  [key: string]: string;
  Korea: "ko"; // Korea는 꼭 있어야 됨.
};

let countryCodes3: CountryCodes3 = {
  Korea: "ko", // Korea 미선언 시, Korea 미선언 오류 발생
  UnitedState: "us",
  UnitedKingdom: "uk",
};
