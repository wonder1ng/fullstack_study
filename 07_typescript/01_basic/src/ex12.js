// 제네릭: 타입을 동적으로 결정해주는 기능
//
function func1(value) { }
function func2(value) { }
function func3(value) {
    console.log(typeof value);
    return;
}
func3(10);
func3("hong");
func3([1, 2, 3]);
// prettier-ignore
func3((function () { return 1; }));
func3(function () { });
func3(function () { });
func3(function () { });
func3({});
function func4(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
func4(10, "hong"); // 타입 명시적 선언
func4(10, "hong");
