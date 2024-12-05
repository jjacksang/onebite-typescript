/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

// 타입을 지정하였으나 초기화된 빈 값을 통해 타입을 설정할 때
// as Type으로 설정할 수 있음

let person = {} as Person;

person.name = "진상우";
person.age = 30;

type Dog = {
    name: string;
    color: string;
};

// 타입을 정의해두고 그 이후 추가적인 타입을 설정할 때도 가능

let dog = {
    name: "월월",
    color: "brown",
    breed: "똥개",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// 이렇게는 사용하지 않는게 좋다.
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "반코",
    color: "white",
} as const;

/**
 * Non null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "진상우",
};

const len: number = post.author!.length;
