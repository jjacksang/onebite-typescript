/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

// 인자값을 public으로 설정할 경우 외부에서 접근 가능
// 인자값을 private로 설정할 경우 외부에서 접근 불가능
// private경우 파생된 경우에도 접근 불가능
// 인자값을 protected로 설정할 시 외부에선 사용 불가능, 파생된 클래스에선 가능

class Emplyee {
    // 필드
    private name: string;
    protected age: number;
    public position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name} 일해라`);
    }
}

const employee = new Emplyee("진상우", 30, "developer");
// employee.name = "이정환";
// employee.age = 27;
employee.position = "백수";

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

    // 메서드
    func() {
        // protected에선 파생 클래스에서 접근 가능
        this.age;
    }
}

console.log(employee);
