// object
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "진상우",
};

// 읽기 전용 property로 만들기 위한 방법
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};

// config.apiKey = "hacked"
