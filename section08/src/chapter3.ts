/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// key value쌍으로 맵드타입을 지정하면 선택적(?)으로 사용 가능
type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // 기능

    return {
        id: 1,
        name: "진상우",
        age: 30,
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ....수정하는 기능
}

updateUser({
    // id: 1,
    // name: "진상우",
    age: 31,
});
