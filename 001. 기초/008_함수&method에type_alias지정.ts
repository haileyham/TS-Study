//------------------------------------------------------------//
// 함수 type alias
//------------------------------------------------------------//

//type alias에 함수 type 저장해서 사용
type 함수타입1 = () => {};
type 함수타입2 = (a: string) => number; // 파라미터 string, return은 number (return이랑 {} 생략해서 사용)

// 함수 type alias 사용하려면 '함수표현식' 사용
let 함수10 : 함수타입2 = function (a) {
    return parseInt(a) + 10;
}

console.log(함수10('1'));

//1. 함수타입은  () => {} 화살표함수
//2. 함수표현식에서만 type alias 사용가능

//복습
//function 함수 (){} : 함수선언식(호이스팅 영향O)
//let 함수 = function (){}  : 함수표현식(호이스팅 영향X / 클로져 / 인자전달 / 콜백)

//------------------------------------------------------------//
// 메서드 안에 타입지정
//------------------------------------------------------------//

//method 함수
//object 안에 함수의 타입지정 
let 회원정보 = {
    name: 'ham',
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
}

console.log(회원정보.plusOne(3)); //회원정보 안의 함수가 실행(method 함수)
회원정보.changeName();

//------------------------------------------------------------//

// [1]
//메서드 함수내에 타입지정해서 사용해보기

type MemberInfoType = {
    name: string,
    plusOne : (x: number) => number,
    changeName : () => void
}

let 회원정보2: MemberInfoType = {
    name: 'ham',
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕')
        return '안녕리턴'
    }
}

console.log(회원정보2.plusOne(100)); //회원정보 안의 함수가 실행(method 함수)
console.log(회원정보2.changeName()); //return 값 안넣으면 changeName() 실행값으로는 undefined뜸. 안에 console.log('안녕')이랑 undefined랑 동시 출력됨. return 값으로 '안녕리턴' 넣으면, '안녕'과 '안녕리턴' 동시출력

//------------------------------------------------------------//
// 콜백함수 복습
//------------------------------------------------------------//

function 함수20(a) {
    a()
}
function 함수21() {
    
}

함수20(함수21);

//1. 함수 20 내부 코드 a() 실행
//2. 파라미터를 a 자리에 집어넣어서 함수21() 실행

//------------------------------------------------------------//
//------------------------------------------------------------//

//[2]
/**
다음 함수2개를 만들어보고 타입까지 정의해보기.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
 */

// 기본 //방식이 틀렸음, 첫 시작으로 0 한개만 오는게 아니라 000오게되면 전부 잡지 못함. 첫시작이 0이 안되게 하는게 조건이니까 정규식으로 바꾸기(밑에 type alias에 정규식으로 적용)
function cutZero(a : string) : string {
    if (a[0] === '0') {
        const b = a.toString().slice(1)
        return b;
    } else {
        return a.toString();
    }
}

console.log(cutZero('000a'));
console.log(cutZero('abc'));

// type alias
type CutZeroType = (a : string) => string

let cutZero2: CutZeroType = function (a) {
    return a.replace(/^0+/, "");
}

console.log(cutZero2('000a'));
console.log(cutZero2('abc'));

//////////////////////////////////////////

// 기본
function removeDash(a : string) : number{
    return parseInt(a.replace(/-/g, ''));
}

console.log(removeDash('010-123'));

// type alias
type RemoveDashType = (a : string) => number

let removeDash2 : RemoveDashType = function (a) {
    return parseInt(a.replace(/-/g, ''));
}

console.log(removeDash2('123-456'));

//------------------------------------------------------------//

//[3]
/**
[함수에 함수를 집어넣기]
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해보기

(실행예시)

```
만들함수('010-1111-2222', cutZero, removeDash)
이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다. 
```
 */

type MethodType1 = (a: string) => string;
type MethodType2 = (a: string) => number;
type MethodTestType = (a: string, b: MethodType1, c: MethodType2) => void;
//이렇게 해도 되고, 아니면 function 함수만들기(a: string, b: MethodType1, c: MethodType2) 해도 됨 //type에 함수를 집어넣는게 아니라, 들어올 함수 타입 정해서 주기

let 함수만들기: MethodTestType = function (a, b, c) {
    return c(b(a));
}

console.log(함수만들기('010-1111-2222', cutZero2, removeDash2));