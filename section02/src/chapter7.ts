// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello2");
}

// void타입에 null값을 돌리기 위해선 tsconfig.json
// "compilerOptions" : { "strictNullChecks" : false } 로 변환하면 가능

// never
// never -> 존재하지 않는 불가능한 타입

// 종료될 수 없는 반복문에 사용
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}
