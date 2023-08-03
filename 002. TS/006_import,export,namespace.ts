//------------------------------------------------------------//
// TypeScript 타입변수 숨기기 문법
// namespace (예전에 사용)
// import,export 없을 때 <script src=""> 여러개 써서 파일 첨부사용
// > 파일 많아질수록 변수명 겹치는 위험 발생하여
// 외부 파일에서 사용하지 않을 변수들은 함수로 감쌌는데 그때
// 타입변수들은 namespace 문법으로 숨겼음
//------------------------------------------------------------//

namespace 네임스페이스 {// object와 다르게 생겼는데 object안에 숨긴것
    export type Name = string | number;
}

namespace 네임스페이스2 {
    export type Name = string | number;
}

// 타입명인 Name이 중복되어도 네임스페이스가 1,2로 다르기 때문에 사용가능
let 변변수1: 네임스페이스.Name = 'ham';
let 변변수2: 네임스페이스2.Name = 'ham';

/**
///<reference path ="./a.ts" / >를 사용해서
다른 ts파일에 있는 것을 import 해와서 사용했었음
*/


// 중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespace 안에 써서 export 해줬음 
namespace MyNamespace {
    export interface PersonInterface { age : number };
    export type NameType = number | string;
} 


//------------------------------------------------------------//
// 더 옛날
// module
//------------------------------------------------------------//

module 네인스페이스3{ // namespace랑 동일하다 생각
}


//------------------------------------------------------------//
// export, import (현재)
//------------------------------------------------------------//

export type 익스포트 = string;
export interface 인터페이스 { }


//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//

//[1]
/**
[Car 그리고 Bike 타입을 만들었는데 너무 길어서...]
(index.ts)
```
type Car = {
    wheel : number,
    model : string
}
interface Bike {
    wheel : 2,
    model : string
}
```
index.ts에 만들어놨는데 더러워서 다른 파일로 옮겨서 사용하고싶을때,
위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보기.
*/

/*
(1) transport.ts파일에 export 붙이고서 

export type Car = {
    wheel : number,
    model : string
}
export interface Bike {
    wheel : 2,
    model : string
}


(2) 다른파일에서 import

import {Car, Bike} from './transport'

(3) 사용하기
let 슝슝 : Car = {wheel: 4, model : 'super'}
*/


//------------------------------------------------------------//

//[2]
/**
[너무 자주만들어 쓰는 함수가 하나]

이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
아무것도 return 해주지 않아야합니다. 
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
*/

export type ObjFunction = (a?: object) => void;

/*
다른파일에서 import

import {ObjFunction} from './file'

let 함수 : ObjFunction = function(aa){
    console.log(aa)
}
함수({abc : 'hello'})
*/

//------------------------------------------------------------//

//[3]
/**
[타입 중복이 너무 많이 발생]
```
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }
```
위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 
(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 
*/

namespace Dog1{
    export type Dog = string;
}
namespace Dog2{
    export interface Dog { name: string };
}

let dog1: Dog1.Dog = 'haha';
let dog2: Dog2.Dog = { name: 'hoho' };
