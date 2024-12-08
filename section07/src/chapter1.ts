/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

// 특정 값들만 받고 제약을 걸기 위한 방법

interface InterfaceA {
    length: number;
}

interface InterfaceB extends InterfaceA {}

// 위에 두 개의 인터페이스처럼 설정하는 방법
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength(["12345"]); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
