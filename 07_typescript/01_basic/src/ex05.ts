// 열거형 타입: 여러 값에 각 이름 부여 및 열거해 사용

// 자동차 게임
let myCarType = 0; // 0 세단, 1 스포츠, 2 SUV, 3 지프카

enum CarType {
  sedan = 0,
  Sport,
  Suv,
  Jeep,
}

myCarType = CarType.Sport;

console.log(myCarType);
