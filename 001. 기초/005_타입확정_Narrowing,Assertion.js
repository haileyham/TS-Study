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
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
//------------------------------------------------------------//
//------------------------------------------------------------//
//[1]
/**
숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자 발견. 이걸 클리닝해주는 함수가 필요함.
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보기.
 */
function 클리닝함수(x) {
    var 클리닝 = [];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            클리닝.push(parseFloat(a));
        }
        else {
            클리닝.push(a);
        }
    });
    return 클리닝;
}
console.log(클리닝함수([123, '1']));
//------------------------------------------------------------//
//[2]
//다음과 같은 함수를 만들어보기
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
/**
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있음.
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고,
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있음.

철수쌤같은 선생님 object 자료를 집어넣으면
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들기
그리고 타입지정도 엄격하게 해보자.

(동작예시)
```
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나도록
```
 */
function 과목(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) { //배열인지 확인 isArray()
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없음';
    }
}
console.log(과목({ subject: 'math' }));
console.log(과목({ subject: ['math', 'music'] }));
/**
JS에서 데이터 타입 확인하기 위해서는 typeof를 사용 하지만 typeof를 사용하여 배열을 검색하면, typeof는 'object'를 리턴함. 배열은 'object'의 특수 형태이기 때문
따라서 typeof만으로는 객체가 배열인지 확인 불가.
객체가 배열인지 확인하기 위해서는 'is Array()'함수 사용

Array.isArray(obj)
파라미터로 입력받은 obj가 배열인지 여부를 boolean값으로 리턴(true > 볼록 내부 실행)
*/
//------------------------------------------------------------//
