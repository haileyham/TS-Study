// Type Narrowing : Type이 아직 하나로 확정되지 않았을 경우 사용
// 대표적 Narrowing 방법 : typeof 연산자
// 어떤 변수 타입이 아직 불확실하면 if 문 등으로 Narrowing 해줘야 조작 가능
function 함수4(x) {
    // 밑에 error 발생 이유는 number | string이기 때문(이전 내용들 참고 003)
    // return x + 1;
    // so 밑에 처럼 if 문으로 Narrowing
    if (typeof x === 'number') { //type이 number일 경우
        return x + 1;
    }
    else {
        return x + '1';
    }
}
//(주의) if문 사용시 끝까지 써야 안전. else, else if 안쓰면 에러로 잡을 수도 있음. 확실하게 해주기
함수4(123);
function 함수5(x) {
    var array = [];
    //error 발생 : array 변수에는 number 만 들어갈 수 있는 [] 배열인데, x는 number | string이기 때문
    // array[0] = x;
    // so 밑에처럼 if 문으로 Narrowing
    if (typeof x === 'number') { // number 아니고 "number"
        array[0] = x;
    }
    else {
    }
}
함수5(123);
//------------------------------------------------------------//
/**
Narrowing으로 판정해주는 문법들
- typeof 변수
- 속성명 in 오브젝트자료
- 인스턴스 instanceof 부모
> 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정
*/
//혹은
/**
assertion 문법(타입 덮어쓰기)
- 변수 as type : 왼쪽에 있는 변수를 type으로 덮어쓰기 (ex) x as number : x변수를 number로 덮덮)

assertion 문법의 용도(안 혼나기 위해서 공뷰공뷰)
1. Narrowing 할 때 사용
2. 무슨 타입이 들어올지 100% 확실할 때 사용
*/
//------------------------------------------------------------//
// assertion
// 변수 as type : 왼쪽에 있는 변수를 type으로 덮어쓰기 (ex) x as number : x변수를 number로 덮덮)
function 함수6(x) {
    var array = [];
    array[0] = x; // x를 number로 인식
}
함수6(123);
//------------------------------------------------------------//
// assertion 문법의 용도(안 혼나기 위해서 공뷰공뷰)
// 1. Narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// [1] Narrowing 할 때 사용
var 밍 = 'ham';
// 밍 as number; //error : 타입을 a에서 b로 변경 x
// 만일 string|number였다면 가능 : Narrowing 할 때 사용하기 때문
// [2] 무슨 타입이 들어올지 100% 확실할 때 사용
function 함수7(x) {
    var array = [];
    array[0] = x; // x를 number로 인식
}
함수7('123'); //지금 파라미터로 123 숫자가 아닌 '123' 문자를 집어 넣었는데, array[0] = x as number;에서 오류가 안뜸.
//그 이유는 assertion을 해놨기 때문인데, 위와같은 상황에서 문자를 넣어도 버그 캐치를 못함
//그렇기 때문에 assertion 을 사용할 때는 무슨 타입이 들어올지 100% 확실할 때만 사용해야 함
//if문에서 해결이 되기 때문에 굳이 assertion 사용을 안 하는데? 왜 사용?
// > 남이 짠 코드를 수정할 때.. 왜 타입에러가 나는지 모르겠을때.. 비상용으로 사용!
//(참고)
//예전 as문법은 <number>이름 이렇게 사용했음
//그치만 리액트 html 태그랑 비슷해보여서 요즘에는 as 키워드만 사용함
//------------------------------------------------------------//
