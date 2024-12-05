/**
 * 대수 타입
 * => 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;

a = 10;
a = "Union";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "반코",
    color: "",
};

let union2: Union1 = {
    name: "철수",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// union1,2,3는 합집합으로 존재
// union4는 같은 집합 내에 있는 것이 아니고 집합 외에 존재하는 값이라 타입 정의 불가능
// Dog타입과 Person타입 모두 슈퍼타입이 될 수 없기 떄문에 오류 발생
// let union4: Union1 = {
//     name: "",
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */

// => variable은 결국 never타입으로 정의 됨
let variable: number & string;

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Intersection = Dog & Person;

// intersection1은 결국 Dog타입과 Person타입을 모두 가지고 있어야만 정상 동작
let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};
