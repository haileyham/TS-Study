//------------------------------------------------------------//
// 타입스크립트 기본 타입 정리(primitive types)
//------------------------------------------------------------//
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 정리1 = 'hey';
//------------------------------------------------------------//
// Union Type : 타입 2개 이상 합친 새로운 타입
// 계산할 때 타입 에러 발생 가능(명확한 타입 아닐 때)
//------------------------------------------------------------//
var 유니언1 = 'hi';
var 유니언2 = [1, '2', 3];
var 오브젝트3 = { a: 123 };
//------------------------------------------------------------//
// any 타입 : 모든 자료형 허용
// unknown 타입 (any보다 안전)
// 두 개의 차이점은 에러 발생 유무 / 003 참고
//------------------------------------------------------------//
var 애니1; //아무거나 들어올 수 있음
var 언노운1; //아무거나 들어올 수 있음
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
function 네로네로(x) {
    if (typeof x === 'number') { //type이 number일 경우
        return x + 1;
    }
    else {
        return x + '1';
    }
}
function 네로네로2(x) {
    var array = [];
    if (typeof x === 'number') { // number 아니고 "number"
        array[0] = x;
    }
    else {
    }
}
// assertion
// 변수 as type : 왼쪽에 있는 변수를 type으로 덮어쓰기 (ex) x as number : x변수를 number로 덮덮)
function 네로네로3(x) {
    var array = [];
    array[0] = x; // x를 number로 인식
}
// [1] Narrowing 할 때 사용
var 네로네로4 = 'ham';
// 밍 as number; //error : 타입을 a에서 b로 변경 x
// 만일 string|number였다면 가능 : Narrowing 할 때 사용하기 때문
// [2] 무슨 타입이 들어올지 100% 확실할 때 사용
function 네로네로5(x) {
    var array = [];
    array[0] = x; // x를 number로 인식
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
var 네로네로타이틀 = document.querySelector("#title");
// [1]
if (네로네로타이틀 != null) {
    네로네로타이틀.innerHTML = "반가워용";
}
// [2]
if (네로네로타이틀 instanceof Element) { //HTML이 Element로 오는 것인지 확인 > true로 볼록문 실행
    // 추후 class에서 object가 class의 자식, instance인지를 확인
    네로네로타이틀.innerHTML = "반가워용";
}
// [3]
var 네로네로타이틀1 = document.querySelector("#title123잘못입력");
// as 키워드 사용해서 id 값 입력 잘못해도 Element로 타입지정
// [4]
if ((네로네로타이틀 === null || 네로네로타이틀 === void 0 ? void 0 : 네로네로타이틀.innerHTML) != undefined) {
    네로네로타이틀.innerHTML = "반가웡";
}
var 타타타1 = 'ham';
var 타타타2 = { name: 'ham', age: 100 };
var 포지션 = { x: 10, y: 20 };
var 삼타변슈다; // <>이건 일반 타입변수에도 사용가능 / 변슈다에 Agee타입을 지정하는데 그 Agee는 string 타입이 됨
var 삼타변슈다2; // 변슈다2 타입 string
var 삼타변슈다3; // 변슈다3 타입 unknown
var 삼타변슈다다1; // []
var 삼타변슈다다2; // any
var 삼타변슈다다딩1; // string
var 삼타변슈다다딩2; // any
var 리드온리동물1 = {
    name: 'cat'
};
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
var 리터럴1;
리터럴1 = '롤러코스터'; //'hello'넣으면 오류
// 함수
function 가위바위보자기(a) {
    return ['가위'];
}
가위바위보자기('보');
// 더해보기
function 햄타입만들어올수있따(a) {
}
//에러 안나도록 하려면?
//방법 1 : object 만들 때 타입지정을 확실히 
var 타입지정확실히 = {
    name: 'ham'
};
내함수네(자료1.name);
//방법 2 : as 문법으로 타입 덮어쓰기
내함수네(자료.name);
//방법3 : as const 키워드 사용 : 이 object는 literal type 지정 알아서 해주기
//as const 효과 1: object value 값을 그대로 타입으로 지정
//as const 효과 2: object 속성들에 모두 readonly 붙여줌(변경하면 에러나도록)
//object 자료를 완전히 잠가놓고 싶으면 as const 사용
var AsConst사용 = {
    name: 'ham'
};
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
var 어레이1 = ['he', 'hi'];
// array 타입지정 / union 타입지정
var 유니언멍멍 = ['dog', true];
//------------------------------------------------------------//
// tuple type
// 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean(위치까지 고려한 타입지정 가능)
// 자료의 위치까지 지정하기 때문에 각 위치에 다른 것 들어오면 에러
// 모든 타입 넣을 수 있음
//------------------------------------------------------------//
var 튜플멍멍2 = ['dog', true];
// 2번째 자료 들어올지말지 모름 ? 붙이기
// 물음표?는 마지막 순서에만 표시 가능
var 튜플멍멍3 = ['dog'];
// 2개도 표시 가능하지만, 항상 뒤에서부터 물음표 시작해야함!
var 튜플멍멍6 = ['dog', true];
// type 지정할 때 tuple 쓸 수 있음
// array가 들어오는데 아직 몇개인지 모를 때 사용
var 튜플arr12 = __spreadArray([4, 5], arr10, true);
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
var 오브젝트1 = { age: 100 };
var 오브젝트2 = {
    member: ['ham', 'hailey'],
    days: 30,
    started: true,
};
;
var 인터네모 = { color: 'red', width: 100 };
var 임플CCar2 = /** @class */ (function () {
    function 임플CCar2(a) {
        this.price = 1000;
        this.model = a;
    }
    return 임플CCar2;
}());
var 임플붕붕카2 = new 임플CCar2('super');
function 인날날1(animal) {
    if ('swim' in animal) { //속성명 in 오브젝트자료
        animal.swim; //이제는 사용 가능
    }
}
var 크Uuser = {
    name: "hailey",
    age: 100,
    locateion: "universe"
};
var 키옵aaa = "name";
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
function 함수함수1(x) {
    return x * 2;
}
function 함수함수2(x) {
    1 + 1;
}
function 함수함수3(x) {
    console.log(x); //출력하면 x는 undefined로 나옴
}
// 함수 type alias 사용하려면 '함수표현식' 사용
var 함수함수4 = function (a) {
    return parseInt(a) + 10;
};
var 함수함수회원정보2 = {
    name: 'ham',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
        return '안녕리턴';
    }
};
//------------------------------------------------------------//2-001
// rest parameter type
//------------------------------------------------------------//
function rest함수파라미터1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수파라미터1(1, 2, 3, 4, 5, 100);
//------------------------------------------------------------//2-010
// 함수에서 쓰는 tuple
// - rest parameter 타입지정시 tuple 가능
//------------------------------------------------------------//
// rest parameter type
function 튜플함수우2() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
튜플함수우2(1, 'hello'); // [1,'hello']
//------------------------------------------------------------//
// 바로 위에 거랑 이거랑 다른 것은 없지만.. 차이점은 rest parameter은 array에 담겨온다
function 튜플함수우3(a, b) {
    console.log([a, b]);
}
튜플함수우3(100, 'hi');
//------------------------------------------------------------//2-001
// 함수 파라미터에 destructuring 타입지정
// 그냥 쓰다보니 3개 됨...
//------------------------------------------------------------//
//[1]
function 파디파디옵함(_a) {
    var animal = _a.animal, age = _a.age;
    console.log(animal, age);
}
;
파디파디옵함({ animal: "cat", age: 1 });
//------------------------------------------------------------//
//[2]
var 파디파디옵1 = { animal: false, age: 10000 };
function 파디파디옵함1(_a) {
    var animal = _a.animal, age = _a.age;
    console.log(animal, age);
}
;
파디파디옵함1(파디파디옵1);
//------------------------------------------------------------//
//[3]
var 파디파디옵2 = { animal: true, age: 555 };
function 파디파디옵함2(_a) {
    var animal = _a.animal, age = _a.age;
    console.log(animal, age);
}
;
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
function 제네릭함수다3(x) {
    return x[0];
}
var 제네릭a3 = 제네릭함수다3([3, 2]); // 여기서는 number로
var 제네릭a4 = 제네릭함수다3(['4', '1']); //여기서는 string으로
//참고로 가끔 타입파라미터명시안해도 자동으로 유추
console.log(제네릭a3);
console.log(제네릭a4);
// extends 문법으로 넣을 수 있는 타입 제한 가능
function 제네릭숫자넣마2(x) {
    return x - 1;
}
var 제네릭a6 = 제네릭숫자넣마2(100);
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
var 클래스타입Person4 = /** @class */ (function () {
    function 클래스타입Person4() {
        this.name = "ham"; // constructor 위에서 미리 name 필드값 정했기에, this.name 사용 가능
    }
    return 클래스타입Person4;
}());
// constructor 파라미터 타입지정 가능
var 클래스타입Person5 = /** @class */ (function () {
    function 클래스타입Person5(a) {
        this.name = a;
    }
    return 클래스타입Person5;
}());
// prototype 함수 어디에?
var 프로토타입Person6 = /** @class */ (function () {
    function 프로토타입Person6(a) {
        this.name = a;
    }
    프로토타입Person6.prototype.함수 = function (a) {
        // 함수랑 똑같이 파라미터 & retrun 타입 지정 가능
        console.log("안녕~! " + a);
        return "a";
    };
    return 프로토타입Person6;
}());
