//------------------------------------------------------------//
// 삼항연산자 타입에 적용
// 조건식이 참이면 A타입 남겨주고, 참이 아니면 B 타입 남겨주기
//------------------------------------------------------------//

// if 문 간략하게 사용할 때 사용
3 > 1 ? console.log('맞') : console.log('놉');

//------------------------------------------------------------//

type Agee<T> = T; //이렇게 쓰면 T에 들어오는 type(예를들면 string)이 T로 들어가서 type Agee의 타입은 T = string이 됨
let 변슈다: Agee<string> // <>이건 일반 타입변수에도 사용가능 / 변슈다에 Agee타입을 지정하는데 그 Agee는 string 타입이 됨

//------------------------------------------------------------//

// 파라미터로 string을 집어넣으면 string 남겨주고, 그게 아니면 unknown 남기기
// 1. type if 문은 삼항연산자로
// 2. 조건식은 extends 써야함(extends 왼쪽에 있는게 오른쪽에 있는지)

type Agee2<T> = T extends string ? string : unknown; // string ? T : number;해도 됨! T에 string 들어와있기 때문
let 변슈다2 : Agee2<string> // 변슈다2 타입 string
let 변슈다3 : Agee2<number> // 변슈다3 타입 unknown

//------------------------------------------------------------//

// [해보기]
// 파라미터로 array 타입 입력하면 array 첫 자료의 타입을 남기고,
// array 타입말고 다른거 입력하면 any 남김

type FirstItem<T> = T extends [] ? [] : any; 
let 변슈다다1 : FirstItem<[]> // []
let 변슈다다2: FirstItem<number> // any


//------------------------------------------------------------//
// infer 키워드
// 조건문에서 쓸 수 있음. 타입을 왼쪽에서 추출해줌
//------------------------------------------------------------//

// infer R : 왼쪽에서 타입 뽑아서 R에 담아주기 (T에서 타입 뽑아주셈)
// R대신에 다른거 써도되긴하는데 보통 R이라고 씀 (ReturnType쓰기도함)
type FirstItem2<T> = T extends infer R ? R : any;  // T:any;해도되긴하는데 infer쓰는 의미를 찾기위해선 R 쓰기
let 변슈다다딩1 : FirstItem2<string> // string
let 변슈다다딩2: FirstItem2<number> // any

// 왜 사용하는지?
// infer R ? R : any; 이렇게 사용하기 위해서


//------------------------------------------------------------//
// infer 키워드 예시2
// array 내부의 타입만 뽑고 싶음
//------------------------------------------------------------//

// T는 string[] 되고,
// R에는 array안에 있던 타입부분만 쏙쏙
type 타입추출<T> = T extends (infer R)[] ? R : unknown;


type aaaa = 타입추출<string[]>;

//이렇게 하면 string[] 입력했을때 R을 남겨줌 // R 타입이됨 = string type 됨


//------------------------------------------------------------//
// infer 키워드 예시3
// 함수를 넣으면 함수의 return 타입만 뽑고 싶음
// => ReturnType이라는 기본함수 쓰면 알아서 해주긴 함
//------------------------------------------------------------//

// T는 () => void 되고 
// infer R은 infer R과 같은 위치에 있는 것들을 뽑아서 R에 담아줌 = void 담김
type 타입추출2<T> = T extends ( () => infer R) ? R : unknown;


type aaaa2 = 타입추출2 < () => void >; // aaaa2  = void

//이렇게 하면 string[] 입력했을때 R을 남겨줌 // R 타입이됨 = string type 됨

//------------------------------------------------------------//
// ReturnType 예약어
// 여기에 함수타입 집어넣으면 return 타입만 뽑아서 알려줌

type bbbb2 = ReturnType<() => void> // bbbb2 = void


//------------------------------------------------------------//
//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//

// [1]
/*
타입 파라미터로 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까?
(동작예시)
```
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
```
이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야함. (array나 tuple이나 그게 그거임)
이걸 만족하는 type Age를 만들어보기.
*/

type Age100<T> = T extends [string, ...any] ? T[0] : unknown; // T에 [string, ...any] 있는지 확인후, 있으면 T[0] 출력, 아니면 unknown
// string, ...any 이기 때문에 첫번째꺼 들어오는거에 따라서 결정됨

let agee1 :Age100<[string, number]>;
let agee2 :Age100<[boolean, number]>; 

//------------------------------------------------------------//

// [2]
/*
함수의 파라미터의 타입을 뽑아주는 기계를 만들어보기. 
타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
아무튼 함수의 파라미터타입이 남아야함.
*/

type 파라미터타입뽑기기계2 = ReturnType<() => void>

type 파라미터타입뽑기기계<T> = T extends ((x: infer R) => void) ? R : any; //infer R 은 왼쪽 T 에서 타입 뽑아옴. T에는 <(x :number) => void>이 들어있는데 지금 infer R을 넣은 곳에는 number타입이 들어가있으므로 R은 number타입 혹은 string 타입이 됨.

type aaaaaa = 파라미터타입뽑기기계<(x :number) => void>
type aaaaaa2 = 파라미터타입뽑기기계<(x :string) => void>