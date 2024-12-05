/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "진상우",
    profile: {
        nickname: "짝상",
    },
    urls: ["www.hello.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// 암묵적 any 진화
let d;
d = 10;
d.toFixed();

d = "low";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
