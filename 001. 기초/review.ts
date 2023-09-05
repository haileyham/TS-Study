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


//-------------------------------------------------------------------------------------------//
// array
//------------------------------------------------------------//
// 기본
// Union Type
//------------------------------------------------------------//


let 어레이1: string[] = ['he', 'hi'];



//-------------------------------------------------------------------------------------------//
// object
//------------------------------------------------------------//
// 기본
// Union Type
// readonly
// literal type
// interface
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
//------------------------------------------------------------//

// type Square = { color: string, width: number };
interface 인터Square { //여기서는 위에 type과 동일
    color: string,
    width: number
};
let 인터네모: 인터Square = { color: 'red', width: 100 };





//-------------------------------------------------------------------------------------------//
// 함수
//------------------------------------------------------------//
// 기본
// void 타입
// () = > {} 화살표함수
// 함수표현식에서만 type alias 사용가능
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


//-------------------------------------------------------------------------------------------//
// TyepeScript Class
// constructor()
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


