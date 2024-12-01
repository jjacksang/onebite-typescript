// number type주석/annotation
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.321;
let num5 = Infinity;
// string
let str1 = "Hello";
let str2 = "lhello";
let str3 = `Hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let nude1 = undefined;
// 만약 number로 지정된 값에 임시로 null을 넣어야 할 경우
// "strictNullChecks" : false로 설정 (tsconfig.json)
// let numA: number = null;
// 리터럴 타입 (값 자체가 되는 타입)
// 리터럴 -> 값
let numA = 10;
let strA = "hello";
let boolA = true;
export {};
