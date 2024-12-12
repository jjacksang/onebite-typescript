/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

// 파라미터로 주는 값에 타입을 지정 후 대괄호([index])를 넣어주어 특정 타입(값)들만 추출 가능
// 해당 기능에서 만약 인터페이스 || 타입에 추가적인 값이 증가한더라도
// 호출하지 않으면 오류가 발생하지 않음
// 중첩으로 사용 시 예시에서 보이는 author안에 있는 id값만도 추출 가능
// => author: Post["author"]["id"]

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

// 이렇게 사용 시 특정 타입에서 number값만을 가진 값들만도 추출 가능
// 인덱스에 들어가는 값은 무조건 타입이다.
const post: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "진상우",
        age: 30,
    },
};

// 튜플 타입으로 접근하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// 이렇게 사용하게 되면 해당되는 배열에 타입들을 모두 가져옴
type TupNum = Tup[number];
