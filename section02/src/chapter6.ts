// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용할 수 있음
let anyVar: any = 10;

anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입 정제하여 사용하기
if (typeof unknownVar === "number") {
    num = unknownVar;
}
