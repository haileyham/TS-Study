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
//------------------------------------------------------------//
//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//
//[1]
/*
[다음 자료의 타입을 지정해보기]
```
let obj = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}
```
한번에 지정하기 위해 index signature 써보기
*/
//------------------------------------------------------------//
//[2]
/*
[다음 object 자료의 타입을 interface 써서 만들기]
```
let obj = {
        'font-size' : 10,
        'secondary' : {
        'font-size' : 12,
        'third' : {
        'font-size' : 14
        }
    }
}
```
object 안에 object 안에 object가 들어있음.
타입지정 해보도록 하자. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보자.
*/ 
