//------------------------------------------------------------//
// [Narrowing 할 수 있는 방법 여러가지]
// 1. if문 typeof
// 2. && 연산자
// 3. in
// 4. instanceof (class로 부터 생성된 object의 경우)
// 5. literal type
//------------------------------------------------------------//

//------------------------------------------------------------//
// [1-2] null & undefined 타입체크 
// && 연산자
//------------------------------------------------------------//

function 널언(a: string | undefined) {
    if (typeof a === 'string') {
        
    } else {
        
    }
}

//위처럼 해도 되지만 밑처럼 &&도 가능

function 널언2(a: string | undefined) {
    if (a && typeof a === 'string') { // && 연산자로 null & undefined 타입체크 : undefined인지 아닌지도 한번에 체크 가능
    // 1. a에 undefined 들어올 경우 조건문 실행 x / 2. a가 string이 아닐 경우 조건문 실행x(string일 경우 if문 실행O)
        console.log('야호 hello')
    }
}

널언2('hello');


/**
[&& 연산자의 다른 기능]

원래 && 이건 조건식 2개가 참이면 전부 참으로 판정해주세요~ 라는 논리연산자

&& 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
&& 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남김.
falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미.

1 && null && 3   // null이 남음
undefined && '안녕' && 100  // undefined 남음

이걸 약간 exploit 하면 if문을 조금 더 간략하게 쓸 수 있음.

그래서 && 기호를 이용해서
if (변수 && typeof strs === "string") {} 
이렇게 사용하면 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고,
(if문 조건식안에 falsy 값이 남으면 if문 실행되지 않음)

변수가 string 타입이면 if문이 실행.
변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법이라고 보면 됨.
*/


//------------------------------------------------------------//
// [3] in 키워드로 object narrowing
// 속성명 in 오브젝트자료
// in 키워드를 사용하려면 배타적인 속성을 사용해야함(예를들면 Fish에 swim있고, Bird에도 swim 있으면 사용 불가. 각각 swim, fly 있어서 사용가능)
//------------------------------------------------------------//

type Fish = {
    swim: string
}

type Bird = {
    fly: string
}

function 날날(animal: Fish | Bird) { // animal 파라미터 하나를 받는데 type이 Fish 혹은 Bird
    // animal.swim 
    // 조작못함. animal이라는 변수가 아직 모호 / narrowing 필요
    
    // if(typeof animal === 'Fish'){} 
    //이렇게 typeof를 Fish로 하고싶지만 못함. typeof 연산자는 number, string, boolean, object 이런식으로만 판정 가능하기 때문
}

//------------------------------------------------------------//

// 그럼 어떻게 할까? >> in 키워드 사용

// 서로 가진 속성명(swim, fly)이 다르면 in 사용
type Fish1 = {
    swim: string
}

type Bird1 = {
    fly: string
}

function 날날1(animal: Fish | Bird) { // animal 파라미터 하나를 받는데 type이 Fish 혹은
    if ('swim' in animal) {//속성명 in 오브젝트자료
        animal.swim //이제는 사용 가능
    }
}


