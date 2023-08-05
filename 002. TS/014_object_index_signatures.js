//------------------------------------------------------------//
// index signatures
// object 타입지정 한번에 가능
//------------------------------------------------------------//
var Uuser = {
    name: "hailey",
    age: 100,
    locateion: "universe"
};
// 속성이름 숫자?
var Uuser2 = {
    0: "hailey",
    1: "100",
    2: "universe"
};
Uuser2[0]; //이런식으로 키값으로 접근 가능
// interface type 지정해도되고, 아니면 없이 그냥 써도됨
var css = {
    "font-size": {
        "font-size": {
            "font-size": 14
        }
    }
};
var css2 = {
    "font-size": {
        "font-size": {
            "font-size": 14
        }
    }
};
