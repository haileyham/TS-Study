function 함수( x:number):number { //파라미터 number, return number로 지정
    return x * 2;
}

//void 타입
//실수로 return하는 걸 사전에 막을 수 있음
function 함수1( x:number):void { 
    1 + 1
}

/**
 * [자바스크립트와 다른 점]
 * 
 */

//파라미터가 옵션인 경우
function 함수2( x?:number):void { //파라미터변수? : 타입
    console.log(x); //출력하면 x는 undefined로 나옴
    1 + 1;
}
함수2();

//(중요)
//변수?:number는 변수:number|undefined와 같음
//위에서 x?:number와
//x:number|undefined 동일

//------------------------------------------------------------//

// x 파라미터 옵션 number | undefined라고 해서 x 파라미터 확실하지 않기 때문에 에러발생
// function 내함수(x?: number): number { 
//     console.log(x * 2)
//     return x * 2 
// }  
// 내함수(3)

//------------------------------------------------------------//

//함수에 Union type 사용하면 더하기에서 error 발생
//error 발생
//why? 명확한 타입 아니기 때문
//이와 같이 애매한 타입들의 경우 타입검사가 필요함
//
function 함수3(x: number | string): void{
    // console.log(x + 3); //에러 뜨는 이유 : 명확한 타입이 아니기 때문에
    // string + number (가능)
    // number + number (가능)
    // 그 외에 불가능 // 위에 것은 number|string + number 이기 때문에 불가능
}
함수3(2)

//------------------------------------------------------------//
//------------------------------------------------------------//
// [1]
//이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 이름"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수 만들기
//파라미터와 return 타입지정
function 이름인사(x? :string) {
    // console.log(`안녕하세요 ${x}`)
    if (x) {
        console.log(`안녕하세요 ${x}`)
    } else {
        console.log(`이름 입력하세용~`)
    }
}
이름인사('홍길동');
이름인사();

//------------------------------------------------------------//
// [2]
//함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들기
//예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야함
//숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야함
//숫자 또는 문자 이외의 자료가 들어오면 안됨
function 자릿수세기(x: string | number) {
    if (typeof x === 'string') {
        console.log(x.length)
    } if (typeof x === 'number') {
        console.log(x.toString().length)
    }
}
자릿수세기(`가나다`)
자릿수세기(1234)

//
function 자릿수세기2(x :number | string) :number {
    console.log(x.toString().length)
    return x.toString().length
} 
자릿수세기2('아아아')
//------------------------------------------------------------//

// [3]
/*
결혼 가능 확률을 알려주는 함수를 만들기
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야 함
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지않음
(예시)
결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 
결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return 안함
*/
function 결혼가능확률(월소득: number, 집: boolean, 매력: '상'|'중'|'하'): string | void {
    let 점수: number = 0;
    점수 += 월소득;
    if (집 === true) {//집 보유시 500점 > 600점으로 바꿈 > 월소득 - 값일때 확인해보려고
        점수 += 600
    }
    if (매력 === '상') {//매력 '상'일때만 100점
        점수 += 100
    }
    if (점수 >= 600) {//총점 600점이상일 때 결혼가능
        return '결혼가능'
    } else {
        return '결혼못해용흑흑'
    }
}
console.log(결혼가능확률(-100, true, '상'))
//월소득 -값 입력할 경우, 점수 - 처리
//매력 '상,중,하'만 명확하게 입력할 수 있도록 타입 지정
// Literal type을 통해 해결가능 나중 배움

//간결하게 코드 수정
function 결혼가능확률2(월소득: number, 집: boolean, 매력: '상'|'중'|'하'): string | void {
    let 점수: number = 집 ? 600 : 0;
    점수 += 월소득;
    매력 === '상' ? 점수+=100 : 0;
    return 점수 >= 600 ? '결혼가능' : '흑흑';
}
console.log(결혼가능확률2(-100, true, '상'))