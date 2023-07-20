//------------------------------------------------------------//
// 함수 type alias
//------------------------------------------------------------//
// 함수 type alias 사용하려면 '함수표현식' 사용
var 함수10 = function (a) {
    return parseInt(a) + 10;
};
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
var 회원정보 = {
    name: 'ham',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
console.log(회원정보.plusOne(3)); //회원정보 안의 함수가 실행(method 함수)
회원정보.changeName();
var 회원정보2 = {
    name: 'ham',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
        return '안녕리턴';
    }
};
console.log(회원정보2.plusOne(100)); //회원정보 안의 함수가 실행(method 함수)
console.log(회원정보2.changeName()); //return 값 안넣으면 changeName() 실행값으로는 undefined뜸. 안에 console.log('안녕')이랑 undefined랑 동시 출력됨. return 값으로 '안녕리턴' 넣으면, '안녕'과 '안녕리턴' 동시출력
//------------------------------------------------------------//
// 콜백함수 복습
//------------------------------------------------------------//
function 함수20(a) {
    a();
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
function cutZero(a) {
    if (a[0] === '0') {
        var b = a.toString().slice(1);
        return b;
    }
    else {
        return a.toString();
    }
}
console.log(cutZero('000a'));
console.log(cutZero('abc'));
var cutZero2 = function (a) {
    return a.replace(/^0+/, "");
};
console.log(cutZero2('000a'));
console.log(cutZero2('abc'));
//////////////////////////////////////////
// 기본
function removeDash(a) {
    return parseInt(a.replace(/-/g, ''));
}
console.log(removeDash('010-123'));
var removeDash2 = function (a) {
    return parseInt(a.replace(/-/g, ''));
};
console.log(removeDash2('123-456'));
//------------------------------------------------------------//
