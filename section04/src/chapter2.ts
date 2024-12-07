/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b=a;

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 실제론 c = nummber리터럴 타입, d = number 이지만
// c = d;
d = c;

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 갯수가 적어질 때 적용 가능

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// func1의 매개변수는 2개 func2의 매개변수는 1개
// 고로 func2의 갯수가 더 적기 떄문에 func1에 적용시키는 것은 가능
// 반대로 func2에 매개변수가 2개이므로 func1을 적용시키는 것은 불가능
func1 = func2;
// func2 = func1;