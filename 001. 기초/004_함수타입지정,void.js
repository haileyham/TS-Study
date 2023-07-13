function 함수(x) {
    return x * 2;
}
//void 타입
//실수로 return하는 걸 사전에 막을 수 있음
function 함수1(x) {
    1 + 1;
}
/**
 * [자바스크립트와 다른 점]
 *
 */
//파라미터가 옵션인 경우
function 함수2(x) {
    console.log(x); //출력하면 x는 undefined로 나옴
    1 + 1;
}
함수2();
//(중요)
//변수?:number는 변수:number|undefined와 같음
//위에서 x?:number와
//x:number|undefined 동일
//------------------------------------------------------------//
