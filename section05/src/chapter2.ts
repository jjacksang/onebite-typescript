/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    age: number;
}

interface Delveloper extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 24,
};

/**
 * 모듈 보강
 * 라이브러리 내에 타입이 이미 정해져있을때 사용 예시(단편적)
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};
