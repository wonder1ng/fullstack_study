// 객체 타입
let user1: object = {
  id: 1,
  name: "홍길동",
};

user1.id;

// 객체 리터럴 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};
// (property) id: number
user2.id;

let user3: {
  // 선택적 프로퍼티를 통해 속성 생략 가능
  id?: number;
  name: string;
} = {
  name: "홍길동",
};

let config: {
  // 읽기 전용 속성으로 지정
  readonly apiKey: string;
} = { apiKey: "My API KEY" };

config.apiKey = "1223234";
