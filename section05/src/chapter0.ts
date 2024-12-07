/**
 * 인터페이스
 */

// ex
interface IPerson {
    readonly name: string;
    age: number;

    sayHi(): void;
    sayHi(a: number, b: number): void;
    // 만약 오버로딩을 사용하고 싶다면 sayHI() => void;를 sayHi(): void로 바꾸어주어야함
}

const person: IPerson = {
    name: "진상우",
    age: 30,
    sayHi: function () {
        console.log("hello");
    },
};

person.sayHi();
person.sayHi(1, 2);
