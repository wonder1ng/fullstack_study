// 열거형 타입: 여러 값에 각 이름 부여 및 열거해 사용

// 자동차 게임
let myCarType = 0; // 0 세단, 1 스포츠, 2 SUV, 3 지프카

enum CarType {
  Sedan = 0,
  Sport,
  Suv,
  Jeep,
}

myCarType = CarType.Sedan;
myCarType = CarType.Sport;

console.log(myCarType);
console.log(CarType.Jeep);

enum Lang {
  korean = "ko",
  english = "en",
}

let user = {
  name: "홍길동",
  lang: Lang.korean,
  car: CarType.Sedan,
};

console.log(user);
