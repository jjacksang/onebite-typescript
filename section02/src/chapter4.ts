// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user1: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "한입 타스",
    location: "부천시",
};

let user2: User = {
    id: 2,
    name: "진상우",
    nickname: "안만드러",
    birth: "1995.04.03",
    bio: "헬로우",
    location: "화성시",
};

// 인덱스 시그니처
type CountryCodes = {
    // key : value로 지정
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    // 필수 값이 있을 때
    Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea: 410,
};
