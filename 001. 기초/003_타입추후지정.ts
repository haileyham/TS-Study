// Union Type : 타입 2개 이상 합친 새로운 타입
let 회원1: number | string = 123;
let 회원2: (number | string | boolean) = 'ham';
회원1; //number
회원2; //string

let 회원들: (number|string)[] = [1, '2', 3];
let 오브젝트: { a: number | string } = { a: 123 };

//------------------------------------------------------------//

// any 타입 : 모든 자료형 허용
// 타입스크립트 쓰는 의미가 사라질 수 있으니, 타입실드를 해제하는 문법이라 생각
// 일반 JS 변수로 만들어 사용할 때 
// 타입관련 버그가 나도 잡아주지 못함
let 회원3: any; //아무거나 들어올 수 있음
회원3 = 123;
회원3 = [];

// 에러를 발생시켜주지 않음ㅠ : 위에서 회원 3는 []로 되어있고, 변수1은 string이어서 맞지 않지만 에러를 발생시켜주지 않음. any이기 때문에 말그대로 아무거나 올 수 있기 때문
let 변수1: string = 회원3;

//------------------------------------------------------------//

// unknown 타입 (any보다 안전)
let 회원4: unknown;
회원4 = 123;
회원4 = {};

// 에러 발생 : 위에서 회원 4 {} 되어있고, 변수2는 string이기 때문에 맞지 않음
// let 변수2: string = 회원4;

// 정상 작동 : 위에서 회원 4 {}, 변수3도 {} 이기 때문 / strict모드에서는 x / 자료 집어넣어도 타입은 그대로 unknown
// let 변수3: {} = 회원4;

//------------------------------------------------------------//

//타입스크립트의 엄격함에 대해 (중요) 간단한 수학연산도 타입이 맞아야 함
//Why 타입 맞는데 +1이 안됑? > 타입스크립트는 타입 엄격한 것 좋아하기 때문
let 계산: string | number; //union type은 새로운타입을 만들어 내는 것
// 계산 + 1; //error

//string타입 + 1 (O)
//number타입 + 1 (O)
//string | number 타입 + 1 (X)
let 계산1: string = '123';
let 계산2: number = 123;
계산1 + 1; //'1234'
계산2 + 1; //124

//------------------------------------------------------------//
let 계산3: unknown = 1;
//error
//숫자타입이여야 숫자처럼 연산함. unknown이 왔기 때문에
// 계산3 - 1;
//타입스크립트는 확실한 것을 좋아하기에 변경하려는 변수의 타입이 확실해야 연산을 수행. -1은 확실하게 왼쪽에 있는 것이 number 타입일 때만 가능. unknown은 number타입이 아님. string | number도 number 타입이 아님.


//에러가 나는 코드들은 나중에 Narrowing / Assertion을 통해 엄격하게 코드 짜기
//unknown 타입인 변수를 조작하려면 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용
//변수에 뭐가 들어있을지 애매한, 추측해야하는 상황이 나오는 시점에선 반드시 사용해야함

//------------------------------------------------------------//

let user :string = 'ham';
// let age :number = undefined; //undefined로 넣으면 strict 모드에서는 error
let married :boolean = false; 
let 햄1: (string | number | undefined | boolean)[] = [user, married];
// let 햄1: (string | number | undefined | boolean)[] = [user, age, married]; //strict모드에서 age undefined준거 error 떠서 주석처리

//------------------------------------------------------------//

let 학교: {
    score: (number|boolean)[],
    teacher: string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]