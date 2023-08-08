//------------------------------------------------------------//
// array 타입 지정
//------------------------------------------------------------//

// array 타입지정 / union 타입지정
let 멍멍: (string | boolean)[] = ['dog', true]


//------------------------------------------------------------//
// tuple type
// 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean(위치까지 고려한 타입지정 가능)
// 자료의 위치까지 지정하기 때문에 각 위치에 다른 것 들어오면 에러
// 모든 타입 넣을 수 있음
//------------------------------------------------------------//

let 멍멍2: [string, boolean] = ['dog', true]


//------------------------------------------------------------//
// tuple 안에 옵션표시 가능
//------------------------------------------------------------//

// 2번째 자료 들어올지말지 모름 ? 붙이기
let 멍멍3: [string, boolean?] = ['dog']

//------------------------------------------------------------//

// 중간에는 올 수 없음
// 2번째자료가 올지말지 모르면, 3번째 옵션의 순서가 보장이 되지 않기 때문에
// let 멍멍4 : [string, boolean?, number] = ['dog']

//------------------------------------------------------------//

// 물음표?는 마지막 순서에만 표시 가능
let 멍멍5: [string, boolean, number?] = ['dog', true]

//------------------------------------------------------------//

// 2개도 표시 가능하지만, 항상 뒤에서부터 물음표 시작해야함!
let 멍멍6: [string, boolean?, number?] = ['dog', true]


//------------------------------------------------------------//
// 함수에서 쓰는 tuple
// - rest parameter 타입지정시 tuple 가능
//------------------------------------------------------------//

// rest parameter type
function 함수우(...x:number[]) { //rest parameter 아직 파라미터 몇개올지 모를때 사용 / type은 number[]로 > 왜냐하면 rest parameter로 받으면 array에 담기기 때문
    console.log(x); // rest parameter 써서 들어왔으면 array [] 안에 받은 파라미터들 넣어서 출력됨
}

함수우(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]

//------------------------------------------------------------//

// rest parameter type
function 함수우2(...x:[number, string]) { // tuple type으로 받을 수 있음
    console.log(x); 
}

함수우2(1, 'hello'); // [1,'hello']

//------------------------------------------------------------//

// 바로 위에 거랑 이거랑 다른 것은 없지만.. 차이점은 rest parameter은 array에 담겨온다
function 함수우3(a: number, b: string){
    console.log([a,b])
}

함수우3(100, 'hi');

//------------------------------------------------------------//
// array 합칠 때
//------------------------------------------------------------//

let arr10 = [1, 2, 3];
let arr11 = [4,5, ...arr10]; // arr11에 arr10 넣고 싶으면 ... spread 연산자 사용
// let arr12 = [4,5, arr10];

//------------------------------------------------------------//

// type 지정할 때 tuple 쓸 수 있음
// array가 들어오는데 아직 몇개인지 모를 때 사용
let arr12: [number, number, ...number[]] = [4, 5, ...arr10]; 


//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//

// [1]
/*
여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
오늘 배운 tuple 타입으로 타입지정합시다. 
쉬워서 답은 생략합니다. 
(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
*/

let 사먹은음식: [string, number, true] = ['파스타,감바스,트러플감튀', 77000, true];

//------------------------------------------------------------//

// [2]
/*
이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
```
let arr = ['동서녹차', 4000, true, false, true, true, false, true]
```
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 
tuple 타입과 spread 연산자를 써보도록 합시다. 
*/

let arr몇개냥궁 : [string,number,...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

//------------------------------------------------------------//

// [3]
/*
함수에 타입지정을 해보도록 합시다.
```
function 함수(){

}
```
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
*/

function 함슈타입지정(...a:[string, boolean, ...(string|number)[]]) {// a가 아니라 ...a여야함
    
}
함슈타입지정('a', true, 6, 3, '1', 4)

//------------------------------------------------------------//

// [4]
/*
다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
*/

function 분류기(...a:(string|number)[]) {
    let result: [string[], number[]] = ([[], []]);

    a.forEach((x) => {
        if (typeof x === 'string') {
            result[0].push(x)
        } else {
            result[1].push(x)
        }
    })
    return result;
}

분류기('b', 5, 6, 8, 'a');