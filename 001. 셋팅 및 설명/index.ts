// 이 변수에는 string만 올 수 있음
// num을 넣으면 오류 뜸
let 이름: string = 'ham';

// 이 변수에는 string 담긴 array만 들어올 수 있음
let 이름배열: string[] = ['ham', 'park'];

// 이 변수에는 object 속성의 age의 키값에는 number 담긴 것만 들어올 수 있음
let 나이 :{ age : number } = { age : 123 }
// age?라고 붙으면 age 속성은 옵션이라는 뜻. age가 들어올 수도 있고 안 들어올 수도 있음. age가 안들어와도 오류 안 뜸
let 나이2 :{ age? : number } = {  }

// Union type : 다양한 타입이 들어올 수 있게
// 변수에 숫자 혹은 문자를 집어 넣을 수 있음
let 이름2: string | number = 'ham';

// Type alias : 타입을 변수에 담아쓸 수 있음. 대문자로 시작
type NameType = string | number;
let 이름3: NameType = 'ham';

// Literal type
// string number 이런 것 외에도 나만의 타입을 만들어 사용 가능. 원하는 글자나 숫자를 입력하면 이름4에는 'ham' 또는 'hailey'만 들어올 수 있음.
type NameType2 = 'ham' | 'hailey';
let 이름4: NameType2 = 'ham';

// 함수에 타입 지정 가능
// 파라미터 & return 값 타입 지정가능
// 실수로 다른 타입이 파라미터로 들어오거나 return 될 경우 에러 발생
// 함수는 return 타입으로 void를 설정 가능 > return이 없는지 체크할 수 있는 타입
function 함수명(x :number) :number{
    return x * 2
}

/**
타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없음.

항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 함
 */

//1. 에러
// function 함수명2(x :number | string) {
//     return x * 2
// }

//2. 가능
/**
typeof x === 'number'는 x의 유형이 숫자인지 확인하고 숫자이면 곱셈 연산 x * 2를 수행.

그렇지 않으면 연결(이 예에서는 x + x)과 같은 문자열 작업을 수행하여 x가 문자열인 경우를 처리
 */
function 함수명3(x :number | string) {
    if (typeof x === 'number'){
      return x * 2
    } 
}

// array에 쓸 수 있는 tuple 타입
// array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶으면 tuple 타입을 씀. 대괄호 [ ] 안에 들어올 자료의 타입을 차례로 적어주면 됨.
// 무조건 첫 째는 number, 둘째는 boolean
type Member = [number, boolean];
let ham: Member = [100, false]

// object에 타입지정해야할 속성이 너무 많을 때
// object 타입도 정의가 너무 길면 type 키워드로 변수에 담아 사용가능
// type 키워드 interface 키워드를 이용가능
// 특정 속성이 선택사항이면 물음표를 기입가능
type MyObject = {
    name? : string,
    age : number
}
let 햄 :MyObject = { 
    name : 'ham',
    age : 3
}

// index signature
// object 안에 어떤 속성이 들어갈 지 아직 모르면 통으로 잡아서 타입지정 가능.
type MyObject2 = {
    [key : string] : number,
}
let 햄2 :MyObject2 = { 
    age: 3,
    weight : 1000,
}

// class 타입지정 가능
// 다만 중괄호 내에 미리 name 변수를 만들어놔야 constructor 안에서 this.name 이렇게 사용 가능.
class Person {
    weight:number;
    constructor(weight :number){
        this.weight = weight;
    }
}