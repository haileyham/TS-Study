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
function 널언(a) {
    if (typeof a === 'string') {
    }
    else {
    }
}
//위처럼 해도 되지만 밑처럼 &&도 가능
function 널언2(a) {
    if (a && typeof a === 'string') { // && 연산자로 null & undefined 타입체크 : undefined인지 아닌지도 한번에 체크 가능
        // 1. a에 undefined 들어올 경우 조건문 실행 x / 2. a가 string이 아닐 경우 조건문 실행x(string일 경우 if문 실행O)
        console.log('야호 hello');
    }
}
널언2('hello');
function 날날(animal) {
    // animal.swim 
    // 조작못함. animal이라는 변수가 아직 모호 / narrowing 필요
    // if(typeof animal === 'Fish'){} 
    //이렇게 typeof를 Fish로 하고싶지만 못함. typeof 연산자는 number, string, boolean, object 이런식으로만 판정 가능하기 때문
}
function 날날1(animal) {
    if ('swim' in animal) { //속성명 in 오브젝트자료
        animal.swim; //이제는 사용 가능
    }
}
//------------------------------------------------------------//
// [4] instanceof 연산자로 object narrowing
// 오브젝트 instanceof 부모 class
// class는 object 뽑는 기계라 생각(위에서 오브젝트 instanceof 부모class는  => 부모가 누군지 검사)
// object 두개 비슷하면 부모 class 누군지 물어봐서 narrowing 가능
//------------------------------------------------------------//
var 날짜 = new Date(); //Date는 class임
if (날짜 instanceof Date) { //날짜가 Date로 부터 생성됐는지 (부모맞는지) / narrowing 가능 / true 면 조건문 실행
}
function 자동자전(x) {
    if (x.wheel === '4개') { // x파라미터로 들어온것이 자동차일 경우 이거 실행해주세요~ / 즉 x.wheel 이 4개이면 '자동차' 타입이 들어온것임
        console.log('the car is ' + x.color);
    }
    else { //2개이면 이거 실행
        console.log('the bike is ' + x.color);
    }
}
자동자전({ wheel: '4개', color: 'red' });
// 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해쥼.
