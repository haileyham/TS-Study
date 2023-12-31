//------------------------------------------------------------//
// rest parameter
//------------------------------------------------------------//

function 함수파라미터(...a) { // 점3개 붙이면 rest parameter. 파라미터 여러개 들어올 수 있음
    // 다른 파라미터 있으면 맨 뒤에만 사용가능
    console.log(a);
}

함수파라미터(1, 'a', 1, 2, 3, 4, 5, 6, 7, 'a,a'); // rest parameter 자리에 들어온 데이터는 전부 [] 에 담아줌

//------------------------------------------------------------//
// rest parameter type
//------------------------------------------------------------//

function 함수파라미터1(...a: number[]) { // rest parameter는 []에 담아서 나오기때문에 타입지정 number 아니고 number[]
    console.log(a);
}

함수파라미터1(1, 2, 3, 4, 5, 100)

//------------------------------------------------------------//
// ...spread operator 는 괄호 벗기는 문법
// ...rest parameter 랑 두개는 다른 것

let arr = [1, 2, 3];
let arr1 = [4,5];
let arr2 = [...arr, ...arr1];
console.log(arr2); //(5) [1, 2, 3, 4, 5]

//------------------------------------------------------------//
// destructuring
//------------------------------------------------------------//

// array
let arr3 = ['hello', 100]; // 이 자료들을 변수로 빼서 쓰고 싶으면
let 빼서쓰기1 = arr[0];
let 빼서쓰기2 = arr[2];
// 이렇게 할 수도 있지만 
let [빼서쓰기3, 빼서쓰기4] = ['hello', 500]; // 오른쪽 자료들을 왼쪽 변수들로 쉽게 빼서 사용
console.log(빼서쓰기3);
console.log(빼서쓰기4);

//------------------------------------------------------------//

// object
let { student: 학생빼, age: 나이빼 } = { student: true, age: 20 };
console.log(학생빼); //true
console.log(나이빼); //20

//자바스크립트 신문법에서 가능해짐. 앞에 똑같은 값 지니면 생략가능.
let { 학생빼자, 나이빼자 } = {학생빼자: false, 나이빼자: 100 };
console.log(학생빼자); //false
console.log(나이빼자); //100

//------------------------------------------------------------//
// 함수 파라미터에 destructuring
//------------------------------------------------------------//

// 이렇게 해야하는 것을
let 옵젝트 = { student: true, age: 9 };

function 옵젝파(a, b) {
    console.log(a,b)
}

옵젝파(옵젝트.student, 옵젝트.age);

//------------------------------------------------------------//

//이렇게 가능
// 함수 파라미터 작명할 때 destructuring 쓰면 object 넣기 쉬어짐

let 옵젝트1 = { teacher : true, age : 999}

function 옵젝파1({ teacher, age }) { //(상식) 파라미터 만들기 == 변수만들기
    console.log(teacher, age); // true 999 / false 333
}

옵젝파1(옵젝트1); // argument에 obejct를 넣을 수 있음
옵젝파1({teacher:false, age: 333}); // 이렇게 바로 넣을 수도 있음

//------------------------------------------------------------//
// 함수 파라미터에 destructuring 타입지정
// 그냥 쓰다보니 3개 됨...
//------------------------------------------------------------//

//[1]
function 파디옵함({ animal, age }:{animal:string, age:number}) {
    console.log(animal, age);
};

파디옵함({animal:"cat", age:1});

//------------------------------------------------------------//

//[2]
let 파디옵1 = { animal: false, age: 10000 };

function 파디옵함1({ animal, age }:{animal:boolean, age:number}) {
    console.log(animal, age);
};

파디옵함1(파디옵1);

//------------------------------------------------------------//

//[3]
let 파디옵2:{animal : boolean, age:number} = { animal: true, age: 555 };

function 파디옵함2({ animal, age }) {
    console.log(animal, age);
};

파디옵함2(파디옵2);

/**
기능면에서 세 함수 모두 올바르게 작동하고 각각의 함수 호출로 동일한 출력을 생성합니다.


내가 가장 좋아하는 것이 무엇인지는 개인 취향의 문제입니다. 세 함수 모두 동일한 작업을 수행하지만 첫 번째와 두 번째 함수는 함수 매개 변수의 유형을 명시적으로 지정하여 코드를 보다 자체 문서화하고 이해하기 쉽게 만듭니다. 세 번째 함수는 TypeScript의 유형 유추에 의존하며 간단한 경우에는 괜찮을 수 있지만 더 복잡한 코드에서는 명확하지 않을 수 있습니다.


일반적으로 명시적인 유형 주석을 사용하면 코드를 더 읽기 쉽고 유지 관리할 수 있으므로 선택해야 하는 경우 첫 번째 또는 두 번째 접근 방식을 선호합니다.
 */

//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//

// [1]
/*
[숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들기]

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/

// forEach
function 숫자최댓값(...a: number[]): number {
    let result = 0;
    a.forEach((i) => {
        if (result < i) { // i가 result보다 크면 result는 i값으로 업데이트
            result = i
        }
    })
    return result;
}
숫자최댓값(1, 2, 3, 100, 5, 85, 4);
console.log(숫자최댓값(1, 2, 3, 100, 5, 85, 4))

//------------------------------------------------------------//

// Math.max
function 숫자최댓값2(...a : number[]):number {
    return Math.max(...a);
}
console.log(숫자최댓값2(1, 2, 3, 200, 5, 85, 4))

//------------------------------------------------------------//

// reduce
function 숫자최댓값3(...a: number[]):number {
    return a.reduce((이전값, 현재값) => 이전값 > 현재값 ? 이전값 : 현재값);
}

console.log(숫자최댓값3(1, 2, 3, 300, 5, 85, 4))

//------------------------------------------------------------//

// [2]
/*
[이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들기]
```
함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?
```
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/

function 입력파({user, comment, admin}:{user:string, comment:number[], admin:boolean}):void {
    console.log(user);
    console.log(comment);
    console.log(admin);
}

입력파({ user: 'kim', comment: [3, 5, 4], admin: false });

// 혹은 object 타입지정해서 하기

type UserType = {
    user: string,
    comment: number[],
    admin: boolean
}

function 입력파2({user, comment, admin}:UserType):void {
    console.log(user);
    console.log(comment);
    console.log(admin);
}

입력파2({ user: 'kim', comment: [3, 5, 4], admin: false });

// 혹은 object type interface 사용하기

interface UserType2{
    user: string,
    comment: number[],
    admin: boolean
}

function 입력파3({ user, comment, admin }: UserType2): void{
    console.log(user);
    console.log(comment);
    console.log(admin);
}

입력파3({ user: 'kim', comment: [3, 5, 4], admin: false });


//------------------------------------------------------------//

// [3]
/*
[이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들기] 
```
함수( [40, 'wine', false] )
```
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/

function 다입력([num, drink, car]: (number|string|boolean)[]):void {
    console.log(num, drink, car);
}

다입력([40, 'wine', false]);


