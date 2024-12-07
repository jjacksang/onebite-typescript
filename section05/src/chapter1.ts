/**
 * 인터페이스의 확장
 */

// interface Animal {
//     name: string;
//     age: number;
// }

// interface Dog {
//     name: string;
//     age: number;
//     isBark: boolean;
// }

// interface Cat {
//     name: string;
//     age: number;
//     isScratch: boolean;
// }

// interface Chicken {
//     name: string;
//     age: number;
//     isFly: boolean;
// }

// 위에서 정의한 인터페이스를 확장
// interface Animal로 사용해도 되고 type Animal로 사용해도 가능
type Animal = {
    name: string;
    age: number;
};

interface Dog extends Animal {
    isBark: boolean;
}

// 인터페이스 적용 결과
const dog: Dog = {
    name: "",
    age: 2,
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat = {
    name: "",
    age: 3,
    isBark: true,
    isScratch: false,
};
