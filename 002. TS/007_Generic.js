//------------------------------------------------------------//
//------------------------------------------------------------//
// array입력하면 첫자료 return 해주는 함수
function 함수다(x) {
    return x[0];
}
var a = 함수다([1, 1]); //a의 타입은 unknown임 / 숫자나오면 숫자로 타입변환 같은기능 없음 / unknown이면 계속 unknonwn
console.log(a); // 3
// console.log(a + 1); // 안됨 / why? 타입이 unknown이기때문에 애매해서그럼
// 해결방법 1. 함수내부에 narrowing 하거나 as 쓰기(귀찮음)
// 해결방법 2. Generic 함수 만들기(파라미터로 타입을 입력하는 함수)
//------------------------------------------------------------//
// Generic 함수
// 다음과 같이 꺾쇠 괄호와 대문자 MyType 변수로서 지정함으로서, 제네릭을 통해 코드에 선언한 타입을 변수화 하고, 나중에 타입을 정하는 식으로 유연하게 사용이 가능하다.
// Generic 타입은 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공한다.
//------------------------------------------------------------//
function 함수다2(x) {
    //함수다2뒤에<MyType>하나외에도 중복으로 올 수 있음(<MyType>,<MyType2> 콤마로)
    return x[0];
}
var a2 = 함수다2([2, 2]); //(1) 이곳에 먼저 타입을 집어넣고 = number라는 타입을 위의 MyType에 집어넣어주세요!
console.log(a2);
//------------------------------------------------------------//
//  Generic 함수 장점 : 확장성 조금 있음 / 매번 다른 타입 출력가능
//------------------------------------------------------------//
function 함수다3(x) {
    return x[0];
}
var a3 = 함수다3([3, 2]); // 여기서는 number로
var a4 = 함수다3(['4', '1']); //여기서는 string으로
//참고로 가끔 타입파라미터명시안해도 자동으로 유추
console.log(a3);
console.log(a4);
//------------------------------------------------------------//
// Generic narrowing 해주기
// 숫자 넣으면 -1해서 return 해주는 함수
//------------------------------------------------------------//
// 이렇게 하면 에러가 남(return x -1)
// why?
// MyType에 number타입을 넣고있긴하지만, 만약 string이 들어온다면? 안되기때문
// 해결책은 narrowing해주면됨
function 숫자넣마(x) {
    // return x - 1; 
}
var a5 = 숫자넣마(100);
//------------------------------------------------------------//
// Generic 타입 제한(constraints)
// extends 문법으로 넣을 수 있는 타입 제한 가능
// interface 문법에 쓰는 extends와 살짝 다른 느낌 (거기서는 복사)
// 여기서는 number와 비슷한 속성 가지고 있는지 if문으로 체크하는 문법
//------------------------------------------------------------//
function 숫자넣마2(x) {
    return x - 1;
}
var a6 = 숫자넣마2(100);
function 함슈슈(x) {
    return x.length;
}
var a7 = 함슈슈(['1', '2', '3']); // array같은 경우 length쓸수있기 때문에 에러 안남
console.log(a7); //3
/*
interface LengthCheck 에서 length:number는 타입으로만 명시가 되고,
함슈슈 함수내에서 x.length는 메서드로 활용되는데, 기존의 length 속성을 사용하는 것.

JavaScript에서 배열은 length라는 내장된 속성을 가지고 있습니다. TypeScript에서는 이러한 내장 속성에 접근할 때 해당 속성이 실제로 존재하는지를 타입 검사를 통해 확인할 수 있습니다. 이렇게 하면 length 속성이 없는 타입에서 length 속성을 사용하려 할 때 컴파일 오류가 발생하여 런타임 에러를 방지할 수 있습니다.

요약하면, TypeScript는 타입 시스템을 통해 기존 메서드와 함수에 타입을 부여하고 제약을 걸어서 코드의 안정성과 신뢰성을 높일 수 있는 강력한 기능을 제공한다.
*/
//------------------------------------------------------------//
// [정리]
// 1. 함수 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한
// 3. class에도 타입파라미터 넣을 수 있음
//------------------------------------------------------------//
// Quiz
//------------------------------------------------------------//
// [1]
/*
[문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까]
연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요

(동작 예시)
함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.
함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
*/
function 갯수파악(a) {
    console.log(a.length);
    return a.length;
}
갯수파악('hello');
갯수파악(['ham', 'hailey']);
var dataaa = '{"name" : "dog", "age" : 1 }';
function 치환(a) {
    return JSON.parse(a);
}
치환(dataaa);
// as 사용하여 쓸 수도 있음 (그렇지만 확장성 면에서는 Generic 좋음 Animal말고도 다른 타입 변환 가능하기 때문)
// as 사용하면 : return 오른쪽에 as Animal 하드코딩 해놓으면 Generic <> 필요없음
//------------------------------------------------------------//
// [3]
/*
class 를 수정해봅시다.
```
class Person {
    name;
    constructor(a){
    this.name = a;
    }
}
let a = new Person('어쩌구');
a.name //any 타입이 되었넹
```
지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
오늘 배운 Generic을 이용해봅시다.
*/
var PPPerson = /** @class */ (function () {
    function PPPerson(a) {
        this.name = a;
    }
    return PPPerson;
}());
var PPPa = new PPPerson('hihi');
PPPa.name; //string 
var PPPa2 = new PPPerson(['hihi']);
PPPa2.name; //string[]
