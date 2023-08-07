//------------------------------------------------------------//
// index signatures
// object 타입지정 한번에 가능
//------------------------------------------------------------//

// 원래(귀찮을수도? 모두 string 타입이라면 모든 속성은 string 이라고 타입지정이 가능한데.. 밑의 index signatures 봐보자)
interface 원래하던것{
    name: string,
    age: string,
    location: string,
}

// index signatures(object 타입지정 한번에 가능)
interface StringOnly{
    [key:string] :string|number, //[key:string] 모든 문자로 된 속성 (=name,age,location)은 string 혹은 number 타입을 갖게 해줌
}

let Uuser = {
    name: "hailey",
    age: 100,
    locateion : "universe"
}


//------------------------------------------------------------//
// index signature와 중복되는 속성(안됨)
//------------------------------------------------------------//

interface StringOnly2{
    // age: number; // 에러 / 왜냐하면 [key:string]이라고 했는데, 이렇게 해버리면 얘가 number인지 string인지 헷갈려하기 때문에 중복X
    age: "20", // 이건 가능함
    [key:string] :string, 
}


//------------------------------------------------------------//
// obeject 키값 숫자일 때?
//------------------------------------------------------------//

interface StringOnly3{
    [key: string]: string, //이거나
    [key: number]:string //이거 둘다 사용가능 / 왜냐하면? object 안에서 키값을 숫자로 지정해도 결국 문자화 되기 때문
}


// 속성이름 숫자?
let Uuser2 : StringOnly3 = {
    0 : "hailey",
    1 : "100",
    2 : "universe"
}

Uuser2[0]; //이런식으로 키값으로 접근 가능


//------------------------------------------------------------//
// 중첩되어있을때?
//------------------------------------------------------------//

interface CssType{
    "font-size": {
        "font-size": {
            "font-size": number;
        };
    };
}

// interface type 지정해도되고, 아니면 없이 그냥 써도됨
let css : CssType = {
    "font-size": {
        "font-size": {
            "font-size" : 14
        }
    }
}


//------------------------------------------------------------//
// recursive하게 type 만드는 법
//------------------------------------------------------------//

interface CssType2 {
    "font-size": CssType2 | number; // 중복해서 들어갈 때 CssType2 타입으로 넣어주면됨. 마지막에는 숫자가 들어가기 때문에 union type으로 number 함께 지정해줘야함
    // 즉 font-size 속성안에는 CssType2과 똑같은 타입이 올 수 있거나, number가 올 수 있음
}

let css2 : CssType2 = {
    "font-size": {
        "font-size": {
            "font-size" : 14
        }
    }
}


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