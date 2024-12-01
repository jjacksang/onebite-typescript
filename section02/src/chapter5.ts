// Enumerable Type(열거형 타입)

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS는 없고 TS만 있음

// 숫자를 지정하지 않아도 순차적으로 증가
enum Role {
    ADMIN = 10,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER,
    language: Language.korean,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST,
};

console.log(user1, user2, user3);
