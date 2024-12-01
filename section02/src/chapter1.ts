// number type주석/annotation
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.321;
let num5: number = Infinity;

// string

let str1: string = "Hello";
let str2: string = "lhello";
let str3: string = `Hello`;
let str4: string = `hello ${num1}`;

// boolean

let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let nude1: undefined = undefined;

// 만약 number로 지정된 값에 임시로 null을 넣어야 할 경우
// "strictNullChecks" : false로 설정 (tsconfig.json)

// let numA: number = null;

// 리터럴 타입 (값 자체가 되는 타입)
// 리터럴 -> 값
let numA: 10 = 10;

let strA: "hello" = "hello";

let boolA: true = true;
