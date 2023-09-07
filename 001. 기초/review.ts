//------------------------------------------------------------//
// [type]
// union type
// type alias
// literal type
// type narrowing / type of / if / as / instanceof
// any
// unknonwn
// export
// infer
// x ?: type
// x?.
//------------------------------------------------------------//

//------------------------------------------------------------//
// array
// tuple type
//------------------------------------------------------------//

//------------------------------------------------------------//
// object
// interface / extends / implement / index signature
// in(type alias)
// keyof
// namespace
//------------------------------------------------------------//

//------------------------------------------------------------//
// function
// void
// typeof / as
// function type alias ()=>{}
// rest parameter
// never
// Generic / extends
//------------------------------------------------------------//

//------------------------------------------------------------//
// class
// 필드값
// public
// private -class내부수정
// protected -extends
// static -자식x
// extends
// implement / interface
//------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------//
// 타입스크립트 기본 타입 정리(primitive types)
//------------------------------------------------------------//

let 정리1: string = 'hey';



//------------------------------------------------------------//
// Union Type : 타입 2개 이상 합친 새로운 타입
// 계산할 때 타입 에러 발생 가능(명확한 타입 아닐 때)
//------------------------------------------------------------//

let 유니언1: (number | string) = 'hi';
let 유니언2: (number|string)[] = [1, '2', 3];
let 오브젝트3: { a: number | string } = { a: 123 };



//------------------------------------------------------------//
// any 타입 : 모든 자료형 허용
// unknown 타입 (any보다 안전)
// 두 개의 차이점은 에러 발생 유무 / 003 참고
//------------------------------------------------------------//

let 애니1: any; //아무거나 들어올 수 있음
let 언노운1: unknown; //아무거나 들어올 수 있음



//------------------------------------------------------------//
// 옵션 타입? : 타입
// 변수?:number는 변수:number|undefined와 같음
//------------------------------------------------------------//



//------------------------------------------------------------//005
// Type Narrowing : Type이 아직 하나로 확정되지 않았을 경우 사용
// typeof 연산자
// Narrwing / assertion

// [Narrowing으로 판정해주는 문법들]
// - typeof 변수
// - 속성명 in 오브젝트자료
// - 인스턴스 instanceof 부모
// > 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정

// [assertion 문법(타입 덮어쓰기)]
// - 변수 as type : 왼쪽에 있는 변수를 type으로 덮어쓰기 (ex) x as number : x변수를 number로 덮덮)
// 
// assertion 문법의 용도(안 혼나기 위해서 공뷰공뷰)
// 1. Narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용

//------------------------------------------------------------//

function 네로네로(x: number | string) {
    if (typeof x === 'number') {//type이 number일 경우
        return x + 1;
    } else {
        return x + '1';
    }
} 

function 네로네로2( x: number | string) {
    let array: number[] = [];
    if (typeof x === 'number') { // number 아니고 "number"
        array[0] = x;
    } else {
        
    }
    
}

// assertion
// 변수 as type : 왼쪽에 있는 변수를 type으로 덮어쓰기 (ex) x as number : x변수를 number로 덮덮)
function 네로네로3(x : number|string) {
    let array: number[] = []
    array[0] = x as number; // x를 number로 인식
}

// [1] Narrowing 할 때 사용
let 네로네로4: string = 'ham';
// 밍 as number; //error : 타입을 a에서 b로 변경 x
// 만일 string|number였다면 가능 : Narrowing 할 때 사용하기 때문

// [2] 무슨 타입이 들어올지 100% 확실할 때 사용
function 네로네로5(x : number|string) {
    let array: number[] = []
    array[0] = x as number; // x를 number로 인식
}



//------------------------------------------------------------//009

// type narrowing
// HTML 조작시 narrowing하는 방법 5개(HTML 조작시 querySelector못찾으면 null나오기때문에 필요)
// 1. if
// 2. instanceof 연산자 (가장 많이 사용하게 됨)
// 3. as
// 4. ?. (optional chaining)
// 5. tsconfig.json의 strict false로 바꾸기 or (타입스크립트 그냥 쓰지말기zZ)

// [1-2] null & undefined 타입체크 / 2-002
// && 연산자
// if (a && typeof a === 'string') { // && 연산자로 null & undefined 타입체크 : undefined인지 아닌지도 한번에 체크 가능
// 1. a에 undefined 들어올 경우 조건문 실행 x / 2. a가 string이 아닐 경우 조건문 실행x(string일 경우 if문 실행O)

// [3] in 키워드로 object narrowing / 2-002
// 속성명 in 오브젝트자료
// in 키워드를 사용하려면 배타적인 속성을 사용해야함(예를들면 Fish에 swim있고, Bird에도 swim 있으면 사용 불가. 각각 swim, fly 있어서 사용가능)
// if(typeof animal === 'Fish'){}
// 이렇게 typeof를 Fish로 하고싶지만 못함. typeof 연산자는 number, string, boolean, object 이런식으로만 판정 가능하기 때문
// if ('swim' in animal) {//속성명 in 오브젝트자료
// animal.swim //이제는 사용 가능

// [4] instanceof 연산자로 object narrowing0
// class는 object 뽑는 기계라 생각(위에서 오브젝트 instanceof 부모class는  => 부모가 누군지 검사)

// [5] literal type
// object 타입이 둘다 비슷하게 생겼는데 narrowing 어떻게 할까 ?
// 비슷한 object 타입일 경우 literal type 강제로 만들어두면 나중에 도움
//------------------------------------------------------------//

// 타이틀.innerHTML = "반가워" //error발생 / 마우스 갖다대면 element|null이라고 뜸(union type이라고)
let 네로네로타이틀 = document.querySelector("#title");

// [1]
if (네로네로타이틀 != null) {
    네로네로타이틀.innerHTML = "반가워용"
}

// [2]
if (네로네로타이틀 instanceof Element) {//HTML이 Element로 오는 것인지 확인 > true로 볼록문 실행
    // 추후 class에서 object가 class의 자식, instance인지를 확인
    네로네로타이틀.innerHTML = "반가워용"
}

// [3]
let 네로네로타이틀1 = document.querySelector("#title123잘못입력") as Element;
// as 키워드 사용해서 id 값 입력 잘못해도 Element로 타입지정

// [4]
if (네로네로타이틀?.innerHTML != undefined) {
    네로네로타이틀.innerHTML = "반가웡"
}
// 오브젝트에 붙이는 ?.
//1. 타이틀에 innerHTML이 있으면 출력
//2. 없으면 undefined

// [5]
// tsconfig.json의 strict false로 바꾸기 or (타입스크립트 그냥 쓰지말기zZ)



//------------------------------------------------------------//
// / type alias (타입변수) 만드는 법
// type 변수 작명 관습 : 영어대문자 시작 / 뒤에 Type 붙이기 (AnimalType)
// type변수 : union type으로 합치기 가능 / OR 연산자 통해서 Union type 만들기
// & 연산자로 object 타입 합치기(사실상 &연산자로 둘다만족하는 것)
// interface랑 비교
//------------------------------------------------------------//

type 타입변수다1 = string | number | undefined; //AnimalType 하면 조금 더 정확
let 타타타1: 타입변수다1 = 'ham';

type 타입변수다2Type= { name?: string, age?: number } //obeject 속성안에도 ? 사용가능
let 타타타2: 타입변수다2Type = { name: 'ham', age: 100 }

// &
type 타입변수X = { x: number };
type 타입변수Y = { y: number };
type 뉴타입XY = PositionX & PositionY; // = {x : number, y : number}

let 포지션: NewType = { x: 10, y: 20 };



//------------------------------------------------------------//02-016
// 삼항연산자 타입에 적용
// 조건식이 참이면 A타입 남겨주고, 참이 아니면 B 타입 남겨주기

// 1. type if 문은 삼항연산자로
// 2. 조건식은 extends 써야함(extends 왼쪽에 있는게 오른쪽에 있는지)

// infer 키워드
//------------------------------------------------------------//

type 삼타Agee<T> = T; //이렇게 쓰면 T에 들어오는 type(예를들면 string)이 T로 들어가서 type Agee의 타입은 T = string이 됨
let 삼타변슈다: 삼타Agee<string> // <>이건 일반 타입변수에도 사용가능 / 변슈다에 Agee타입을 지정하는데 그 Agee는 string 타입이 됨


// 파라미터로 string을 집어넣으면 string 남겨주고, 그게 아니면 unknown 남기기
// 1. type if 문은 삼항연산자로
// 2. 조건식은 extends 써야함(extends 왼쪽에 있는게 오른쪽에 있는지)
type 삼타Agee2<T> = T extends string ? string : unknown; // string ? T : number;해도 됨! T에 string 들어와있기 때문
let 삼타변슈다2 : 삼타Agee2<string> // 변슈다2 타입 string
let 삼타변슈다3 : 삼타Agee2<number> // 변슈다3 타입 unknown

// 파라미터로 array 타입 입력하면 array 첫 자료의 타입을 남기고,
// array 타입말고 다른거 입력하면 any 남김
type 삼타FirstItem<T> = T extends [] ? [] : any; 
let 삼타변슈다다1 : 삼타FirstItem<[]> // []
let 삼타변슈다다2: 삼타FirstItem<number> // any

// infer 키워드
// 조건문에서 쓸 수 있음. 타입을 왼쪽에서 추출해줌
// infer R : 왼쪽에서 타입 뽑아서 R에 담아주기 (T에서 타입 뽑아주셈)
// R대신에 다른거 써도되긴하는데 보통 R이라고 씀 (ReturnType쓰기도함)
type 삼타FirstItem2<T> = T extends infer R ? R : any;  // T:any;해도되긴하는데 infer쓰는 의미를 찾기위해선 R 쓰기
let 삼타변슈다다딩1 : 삼타FirstItem2<string> // string
let 삼타변슈다다딩2: 삼타FirstItem2<number> // any

// 왜 사용하는지?
// infer R ? R : any; 이렇게 사용하기 위해서

// infer 키워드 예시1-3 보기 / 2-016



//------------------------------------------------------------//
// readonly : const 객체 재할당 잠그기
//------------------------------------------------------------//

// readonly 사용하여 object 자료 수정 막기
type 리드온리1 = {
    readonly name : string // 변수 타입지정할 때 실수로 수정하면 에러발생시킴 / 예를들면 
}

const 리드온리동물1 : 리드온리1 = { //이렇게 리드온리동물1.name 이미 cat으로 넣었는데
    name : 'cat'
}
// 리드온리동물1.name = 'dog' //변경하려고 하면, 에러 발생



//------------------------------------------------------------//
// Literal types : 특정 글자나 숫자만 가질 수 있또록 제한을 두는 타입
// 문제점은 객체에서 {name:'ham'}이라고 타입 지정할 경우 값이 ham이 들어오면 에러뜸. 왜냐하면 타입은 string이기 때문, 들어온 값의 타입이 'ham'이어야 함
/**
에러 안나도록
1. object 만들 때 타입지정 확실히
2. as 문법으로 타입 덮어쓰기
3. as const 키워드 사용
- 효과1 : object value 값을 타입으로 지정
- 효과2 : object 속성들에 모두 readonly 붙여줌
 */
//------------------------------------------------------------//

// 변수
let 리터럴1: '롤러코스터' | '후룸라이드';
리터럴1 = '롤러코스터'; //'hello'넣으면 오류

// 함수
function 가위바위보자기(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[]{//파라미터랑 리턴값으로 해당 타입만 들어올 수 있음
    return ['가위'];
}
가위바위보자기('보')


// 더해보기
function 햄타입만들어올수있따(a : 'ham') { //'ham'이라는 자료만 들어올 수 있음(x)/'ham'이라는 타입만 들어올 수 있음(O)
    
}

//에러 안나도록 하려면?
//방법 1 : object 만들 때 타입지정을 확실히 
let 타입지정확실히: {//타입지정을 ham으로
    name : 'ham'
} = {
    name : 'ham'
}
내함수네(자료1.name); 

//방법 2 : as 문법으로 타입 덮어쓰기
내함수네(자료.name as 'ham')

//방법3 : as const 키워드 사용 : 이 object는 literal type 지정 알아서 해주기
//as const 효과 1: object value 값을 그대로 타입으로 지정
//as const 효과 2: object 속성들에 모두 readonly 붙여줌(변경하면 에러나도록)
//object 자료를 완전히 잠가놓고 싶으면 as const 사용
let AsConst사용 = {
    name : 'ham'
} as const; 



//------------------------------------------------------------//2-003
// never type
// 실제로 사용할 일은 없고, 등장 했을 때 이유를 알면 됨.
// - 대부분 쓸 일 없음. :void 사용하면 됨
//------------------------------------------------------------//
//------------------------------------------------------------//
// TypeScript 타입변수 숨기기 문법
// namespace (예전에 사용) / 2-006
// 더 옛날 module
// export, import (현재)
//------------------------------------------------------------//
//------------------------------------------------------------//
// d.ts 파일
// test.d.ts 파일 이렇게 사용되는것들?
// > 타입정의 보관용 파일임 > 다른 ts 파일에서 import 가능
// 모든 타입을 정리해 놓은 레퍼런스용으로 d.ts 파일 사용
// tsconfig.json 에 "declaration":true 추가해주면 됨
// ts파일 만들때마다 d.ts 파일 같이 생성해주는데 type정리해놓기때문에 레퍼런스용으로 좋음(d.ts 자동생성되는 경우 > d.ts 파일수정 하지말기)
// [d.ts 파일 용도]
// 1. 타입정의 따로 보관할 파일이 필요할 때 (export,import 해와서 사용)
// 2. 타입 레퍼런스 생성하고 싶을 때 (tsconfig.json "declareation":true)
//------------------------------------------------------------//



//-------------------------------------------------------------------------------------------//
// array
//------------------------------------------------------------//
// 기본
// Union Type
// tuple type
//------------------------------------------------------------//

let 어레이1: string[] = ['he', 'hi'];

// array 타입지정 / union 타입지정
let 유니언멍멍: (string | boolean)[] = ['dog', true]

//------------------------------------------------------------//
// tuple type
// 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean(위치까지 고려한 타입지정 가능)
// 자료의 위치까지 지정하기 때문에 각 위치에 다른 것 들어오면 에러
// 모든 타입 넣을 수 있음
//------------------------------------------------------------//

let 튜플멍멍2: [string, boolean] = ['dog', true]
// 2번째 자료 들어올지말지 모름 ? 붙이기
// 물음표?는 마지막 순서에만 표시 가능
let 튜플멍멍3: [string, boolean?] = ['dog']
// 2개도 표시 가능하지만, 항상 뒤에서부터 물음표 시작해야함!
let 튜플멍멍6: [string, boolean?, number?] = ['dog', true]

// type 지정할 때 tuple 쓸 수 있음
// array가 들어오는데 아직 몇개인지 모를 때 사용
let 튜플arr12: [number, number, ...number[]] = [4, 5, ...arr10]; 


//-------------------------------------------------------------------------------------------//
// object
//------------------------------------------------------------//
// 기본
// Union Type
// readonly
// literal type
// interface
// implements
// type narrowing
// 속성명 in 옵젝자료 / 2-002
// index signatures(object타입지정 한번에 가능)
// keyof
//------------------------------------------------------------//

let 오브젝트1: { age: number } = { age: 100 }

let 오브젝트2: {
    member: string[],
    days: number,
    started: boolean,
} = {
    member: ['ham', 'hailey'],
    days: 30,
    started: true,
}



//------------------------------------------------------------//013
// interface : Object에 type 지정

// <interface vs type 알아보기>
// [1] extends / &(intersection)
// [2] 중복선언


// [1] 다른점
// interface 장점 : extends로 복사가능
// type에서는 : & 기호 intersection type 으로 가능
// interface의 extends랑 다른점은 : &(=intersection type)은 두 타입을 전부 만족하는 타입

// [2] 다른점
// interface : 중복선언 가능(합쳐짐)
// type : 중복선언 불가능

// implements
// interface는 object 타입 지정할 때 사용하는데, 사실 용도가 하나 더 있다.
// class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있는데 이때 implements 키워드가 필요하다.
//------------------------------------------------------------//

// type Square = { color: string, width: number };
interface 인터Square { //여기서는 위에 type과 동일
    color: string,
    width: number
};
let 인터네모: 인터Square = { color: 'red', width: 100 };


//------------------------------------------------------------//
// implements
// implements는 타입지정문법이 아님
// -implements는 interface에 들어있는 속성을 가지고 있는지 확인만 하는 뜻이기 때문에 class에 타입을 할당하고 변형시키는 키워드가 아님
//------------------------------------------------------------//

// class CCar로부터 생산되는 object들은 model, price 속성을 가짐
//만약 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶다면, interface + implements 키워드로 확인
interface 임플CCarType{
    model: string,
    price: number
}

class 임플CCar2 implements 임플CCarType{ // class 이름 우측에 implements를 쓰고 interface 이름을 쓰면 "이 class가 이 interface에 있는 속성을 다 들고있어?"라고 확인 가능
    // 다 들고 있으면 정상, 빠진속성있으면 에러
    model: string;
    price: number = 1000;
    constructor(a: string) {
        this.model = a
    }
}

let 임플붕붕카2 = new 임플CCar2('super');


//------------------------------------------------------------//
// [3] in 키워드로 object narrowing
// 속성명 in 오브젝트자료
// in 키워드를 사용하려면 배타적인 속성을 사용해야함(예를들면 Fish에 swim있고, Bird에도 swim 있으면 사용 불가. 각각 swim, fly 있어서 사용가능)
//------------------------------------------------------------//

// 서로 가진 속성명(swim, fly)이 다르면 in 사용
type 인Fish1 = {
    swim: string
}

type 인Bird1 = {
    fly: string
}

function 인날날1(animal: 인Fish1 | 인Bird1) { // animal 파라미터 하나를 받는데 type이 Fish 혹은
    if ('swim' in animal) {//속성명 in 오브젝트자료
        animal.swim //이제는 사용 가능
    }
}



//------------------------------------------------------------//
// index signatures
// object 타입지정 한번에 가능
//------------------------------------------------------------//

// 원래(귀찮을수도? 모두 string 타입이라면 모든 속성은 string 이라고 타입지정이 가능한데.. 밑의 index signatures 봐보자)
interface 크원래하던것{
    name: string,
    age: string,
    location: string,
}

// index signatures(object 타입지정 한번에 가능)
interface 크StringOnly{
    [key:string] :string|number, //[key:string] 모든 문자로 된 속성 (=name,age,location)은 string 혹은 number 타입을 갖게 해줌
}

let 크Uuser:크StringOnly = {
    name: "hailey",
    age: 100,
    locateion : "universe"
}

// index signature와 중복되는 속성(안됨)
interface 크StringOnly2{
    // age: number; // 에러 / 왜냐하면 [key:string]이라고 했는데, 이렇게 해버리면 얘가 number인지 string인지 헷갈려하기 때문에 중복X
    age: "20", // 이건 가능함
    [key:string] :string, 
}



//------------------------------------------------------------//
// key of
// key 값을 전부 가져옴
//------------------------------------------------------------//

// keyof PPerson // 왼쪽에 keyof를 붙이면, 오른쪽 PPerson 객체의 키값들을 가져와서 union 타입으로 만들어줌. 즉 이 자리에 새로운 union 타입이 남음. "age"|"name" 타입이 남음
interface 키옵PPerson{
    age: number,
    name:string
}

// 키옵PPersonKeys 타입에 keyof 키옵PPerson (=age|name의 union 타입) 부여한 것
type 키옵PPersonKeys = keyof 키옵PPerson;
let 키옵aaa: 키옵PPersonKeys = "name";
// 키옵aaa는 키옵PPersonKeys 리터럴타입으로 부여한 것

//------------------------------------------------------------//2-015
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// 타입 변환을 자동으로 해주는 타입변환기 만들어서 사용하기 ★★★
//------------------------------------------------------------//

// 만약 이런 난잡한 코드를 발견할 경우.. string으로 바꾸고 싶을 때
type 타변Carrr = {
    color: boolean,
    model: boolean,
    price: boolean | number
}


type 타변TypeChanger<MyType> = {
    [key in keyof MyType] : string
}

type 타변새로운타입 = 타변TypeChanger<Carrr>

/*
TypeChanger에 Generic <MyType>붙여주기 : 타입 나중에 추후지정하는것
객체에 사용가능!

그렇게 한 다음에 객체 안에는 key 값을 MyType으로 순회하게 하고, 그건 string으로 type 지정해주기

(자세히 살펴보면 
[1] keyof MyType = 파라미터로 들어온 object타입의 key값 = color|model|price 의 leteral union type

[2] key in 구문은 TypeScript에서 mapped type을 정의할 때 사용되는 구문이며 기존의 타입을 변환하여 새로운 타입을 만들어내는데 사용. for...in 루프와 유사한 방식으로 작동. 즉 MyType의 프로퍼티 키들을 순회하며 각각의 프로퍼티에 대한 새로운 타입을 정의한다는 의미)

새로운타입에 TypeChanger지정해주는데 <Carrr>로 <MyType>에 Generic 
즉 MyType에 Carrr 객체타입이 들어감 => key값으로 MyType순회할때 Carrr의 color,model,price가 순회하는 것임

만약 price 부분만 string|number하고 싶으면 다음시간 내용 확인 3항연산자 등 사용하기
*/


/*
이런 변환기는 어떻게 만들어야할까요?
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/
type 타변TypeChanger3<MyT, T> = { //타입파라미터 2개 가넝
    [key in keyof MyT]: T;
}

type 타변새로운타입이다냥2 = 타변TypeChanger3<Bus, string>; // 타입 파라미터 자리에 T 하나 더 입력가넝
type 타변새로운타입이다냥3 = 타변TypeChanger3<Bus, string[]>; // 타입 파라미터 자리에 T 하나 더 입력가넝


//-------------------------------------------------------------------------------------------//
// 함수
//------------------------------------------------------------//
// 기본
// void 타입
// () = > {} 화살표함수
// 함수표현식에서만 type alias 사용가능
// rest parameter
// Generic
// extends (Generic 타입제한)
// tuple(rest parameter 타입지정시 tuple가능)
//------------------------------------------------------------//

function 함수함수1( x:number):number { //파라미터 number, return number로 지정
    return x * 2;
}

function 함수함수2( x:number):void { //실수로 return하는 걸 사전에 막을 수 있음
    1 + 1
}

function 함수함수3( x?:number):void { //파라미터변수? : 타입 // number|undefined
    console.log(x); //출력하면 x는 undefined로 나옴
}

//type alias에 함수 type 저장해서 사용
type 함수함수타입1 = () => {};
type 함수함수타입2 = (a: string) => number; // 파라미터 string, return은 number (return이랑 {} 생략해서 사용)

// 함수 type alias 사용하려면 '함수표현식' 사용
let 함수함수4 : 함수함수타입2 = function (a) {
    return parseInt(a) + 10;
}

//메서드 함수내에 타입지정해서 사용해보기
type 함수함수MemberInfoType = {
    name: string,
    plusOne : (x: number) => number,
    changeName : () => void
}

let 함수함수회원정보2: 함수함수MemberInfoType = {
    name: 'ham',
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕')
        return '안녕리턴'
    }
}



//------------------------------------------------------------//2-001
// rest parameter type
//------------------------------------------------------------//

function rest함수파라미터1(...a: number[]) { // rest parameter는 []에 담아서 나오기때문에 타입지정 number 아니고 number[]
    console.log(a);
}

함수파라미터1(1, 2, 3, 4, 5, 100)


//------------------------------------------------------------//2-010
// 함수에서 쓰는 tuple
// - rest parameter 타입지정시 tuple 가능
//------------------------------------------------------------//

// rest parameter type
function 튜플함수우2(...x:[number, string]) { // tuple type으로 받을 수 있음
    console.log(x); 
}

튜플함수우2(1, 'hello'); // [1,'hello']

//------------------------------------------------------------//

// 바로 위에 거랑 이거랑 다른 것은 없지만.. 차이점은 rest parameter은 array에 담겨온다
function 튜플함수우3(a: number, b: string){
    console.log([a,b])
}

튜플함수우3(100, 'hi');



//------------------------------------------------------------//2-001
// 함수 파라미터에 destructuring 타입지정
// 그냥 쓰다보니 3개 됨...
//------------------------------------------------------------//

//[1]
function 파디파디옵함({ animal, age }:{animal:string, age:number}) {
    console.log(animal, age);
};

파디파디옵함({animal:"cat", age:1});

//------------------------------------------------------------//

//[2]
let 파디파디옵1 = { animal: false, age: 10000 };

function 파디파디옵함1({ animal, age }:{animal:boolean, age:number}) {
    console.log(animal, age);
};

파디파디옵함1(파디파디옵1);

//------------------------------------------------------------//

//[3]
let 파디파디옵2:{animal : boolean, age:number} = { animal: true, age: 555 };

function 파디파디옵함2({ animal, age }) {
    console.log(animal, age);
};

파디파디옵함2(파디파디옵2);



//------------------------------------------------------------//
// Generic 함수
// 다음과 같이 꺾쇠 괄호와 대문자 MyType 변수로서 지정함으로서, 제네릭을 통해 코드에 선언한 타입을 변수화 하고, 나중에 타입을 정하는 식으로 유연하게 사용이 가능하다.
// Generic 타입은 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공한다.

//  Generic 함수 장점 : 확장성 조금 있음 / 매번 다른 타입 출력가능

// Generic 타입 제한(constraints)
// extends 문법으로 넣을 수 있는 타입 제한 가능
// interface 문법에 쓰는 extends와 살짝 다른 느낌 (거기서는 복사)
// 여기서는 number와 비슷한 속성 가지고 있는지 if문으로 체크하는 문법
//------------------------------------------------------------//

function 제네릭함수다3<MyType>(x: MyType[]): MyType{
    return x[0]
}

let 제네릭a3 = 제네릭함수다3<number>([3, 2]); // 여기서는 number로
let 제네릭a4 = 제네릭함수다3<string>(['4', '1']); //여기서는 string으로
//참고로 가끔 타입파라미터명시안해도 자동으로 유추
console.log(제네릭a3);
console.log(제네릭a4);


// extends 문법으로 넣을 수 있는 타입 제한 가능
function 제네릭숫자넣마2<MyType extends number>(x: MyType) {
    return x - 1
}

let 제네릭a6 = 제네릭숫자넣마2<number>(100);



//-------------------------------------------------------------------------------------------//
// TyepeScript Class
// constructor()

// public
// private // 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴 // 자식들 사용불가능
// private 붙으면 class 안에서만 수정, 이용가능(출력은 가능하나, 새로만든 객체에서 접근하여 수정불가)
// private 쓰고 그 다음에 수정함수 만들어서 사용하는게 더 안전

// class 복사
// extends 사용

// protected : extends 된 class는 사용가능, 자식들 사용불가능
// private : extends 된 class는 사용불가능, 자식들 사용불가능
// private, protected 붙이면 class{} 안에서만 사용가능

// static 키워드 붙이면 부모 class에 직접 부여됨(자식에게 안물려줌)
// 원래 class내의 x,y같은 변수들은 부모클래스로부터 생성된 object들만 사용가능했는데,
// static 키워드를 붙이면 자식.x 는 불가하고 부모.x만 가능함
// static x 가져다 쓰려면?
// console.log(UserStatic.x); //이렇게 부모.x로 부모만 가져다 쓸 수 있음

//------------------------------------------------------------//

class 클래스타입Person4{
    name: string; //필드값에 미리 지정해놔야 밑에서 this.name 사용가능
    constructor() {
        this.name = "ham" // constructor 위에서 미리 name 필드값 정했기에, this.name 사용 가능
    }
}

// constructor 파라미터 타입지정 가능
class 클래스타입Person5{
    name: string;
    constructor(a : string) { //파라미터 타입지정 / return 타입도 지정? => 복제되는게 항상 object이기에 return 타입 지정할 이유는 없음
        this.name = a;
    }
}

// prototype 함수 어디에?
class 프로토타입Person6{
    name: string;
    constructor(a:string) {
        this.name = a;
    }

    함수(a: string) { // 프로토타입 함수 추가 이곳에 / 프로토타입 파라미터 타입 지정 가능 / 모든 자식들은 사용 가능
        // 함수랑 똑같이 파라미터 & retrun 타입 지정 가능
        console.log("안녕~! " + a);
        return "a"
    }
}


