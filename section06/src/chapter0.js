/**
 * 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부함");
    },
    introduce() {
        console.log("안녕하세요");
    },
};

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name}입니다`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentB = new Student("진상우", "B", 30);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper("진상우", "B-", 30, "Javascript");
console.log(studentDeveloper);
studentDeveloper.programming();
