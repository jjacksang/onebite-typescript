/**
 * Unknown 타입
 */

// unknown엔 전체 타입이 모두 업 캐스팅 가능
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // // unknown타입에선 다운캐스팅 불가능
    // let num : number = unknownExam;
    // let str: string = unknownExam;
    // let bool: boolean = unknownExam;
}

/**
 * Never 타입
 * 집합으로 비교시 공집합으로 표현할 수 있음
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // never타입에는 어떤 경우에도 다운캐스팅이 불가능 한 것
    // 저장할 수 없는 값들
    // let never1: never = 109;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }

    // void타입은 undefiend값의 슈퍼 타입이다.
    let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // never타입은 순수 공집합이기 때문에 다운캐스팅이 되지 않음
    // neverVar = anyVar;
}
