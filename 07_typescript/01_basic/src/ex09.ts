// 타입 좁히기

function func1(value: number | string) {
  // value.toFixed(): 실수형으로 바꾸기
  // value.toUpperCase(): 대문자로 바꾸기
  if (typeof value === "number") {
    return value.toFixed();
  } else if (typeof value === "string") {
    return value.toUpperCase();
  }
}
console.log(func1(2434.124213), func1("aSdfwwASd"));
