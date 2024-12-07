/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "진상우",
    age: 30,
    position: "developer",
    work() {
        console.log("일해라");
    },
};

class Emplyee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일해라");
    }
}

class ExecutiveOfficer extends Emplyee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Emplyee("진상우", 30, "개발자");
console.log(employeeB);

const employeeC: Emplyee = {
    name: "",
    age: 0,
    position: "",
    work() {},
};
