/**
 * keyof 연산자
 */

// interface Person {
//     name: string;
//     age: number;
// }

type Person = typeof person;

// keyof Person으로 설정하게 되면 Person에 있는 모든 값들에 유니언타입 으로 접근 가능
// 타입에만 사용 가능
function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person = {
    name: "진상우",
    age: 30,
};

getPropertyKey(person, "name"); // 진상우
