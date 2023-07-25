//------------------------------------------------------------//
// interface : Object에 type 지정
//------------------------------------------------------------//

// type Square = { color: string, width: number };
interface Square { //여기서는 위에 type과 동일
    color: string,
    width: number
};
let 네모: Square = { color: 'red', width: 100 };

//------------------------------------------------------------//
// <interface vs type 알아보기>
// [1] extends / &(intersection)
// [2] 중복선언
//------------------------------------------------------------//

// 기본
interface Student {
    name: string;
}
interface Teacher{
    name: string,
    age : number
}

let 학생:Student = { name: 'ham' }
let 선생:Teacher = { name : 'hailey', age : 20}


//------------------------------------------------------------//
// [1] 다른점
// interface 장점 : extends로 복사가능
//------------------------------------------------------------//

interface Student1 {
    name: string;
}
interface Teacher1 extends Student1{ // extends
    age : number
}

let 학생1:Student = { name: 'ham' }
let 선생1:Teacher = { name : 'hailey', age : 20}

//------------------------------------------------------------//

// type에서는 : & 기호 intersection type 으로 가능
// interface의 extends랑 다른점은 : &(=intersection type)은 두 타입을 전부 만족하는 타입
// interface의 extends는 복사해주세요

type Student2 = { name: string };
type Teacher2 = { age: number } & Student2;


//------------------------------------------------------------//
// [2] 다른점
// interface : 중복선언 가능(합쳐짐)
// type : 중복선언 불가능
//------------------------------------------------------------//

// interface 중복선언 가능
interface StudentTest{
    name: string;
}

interface StudentTest{
    score: number;
}

let 학생Test: StudentTest = { name: 'ham', score: 100 };

// 외부 라이브러리 같은 경우 interface 많이 사용
// 추후 타입에 뭔가를 추가하는 것이 쉬움
// 다른 사람이 이용을 많이할 것 같으면 object 타입 정할 때 interface 사용

//------------------------------------------------------------//

// type 중복 선언 불가능
type StudentTest2 = { name: string };
// type StudentTest2 = { score: number };


//------------------------------------------------------------//
// 다른점 [2] -2 추가
//------------------------------------------------------------//

// 만약 extends 사용 할 때 중복 속성 발생할 경우? > 에러
interface StudentTest3{
    name: string;
}

interface TeacherTest3 extends StudentTest3{
    // name: string; // 독같아서 ㄱㅊ
    // name: number; // extends로 가져온것에 name : string 되어있기 때문에 name:number불가
}

//------------------------------------------------------------//

// type & 사용할 때 중복속성 발생하면?  미리 에러가 나지 않아서 주의
type StudentTest4 = { name: string };
type StudentTest55 = { name: number } & StudentTest4; //여기서는 에러 발생 안함

// let 학생Test1: StudentTest55 = { name: 'ham' }; //여기 name에서 에러 발생

// & : 합치는게 아니라 왼,오른쪽 둘다 만족하는 타입이기 때문
// name이 name이고 number이고 둘다 만족할 수는 없음


//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//

// [1]
/**
[interface 이용해서 간단하게 타입을 만들기]
```
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
```
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

무슨 타입일지는 알아서 기입합시다. 
 */

interface Product{
    brand: string,
    serialNumber: number,
    model : string[]
}

let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//------------------------------------------------------------//

// [2] *
/**
[array 안에 object 여러개가 필요]

쇼핑몰 장바구니를 구현하려고 하는데 
```
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
```
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 

오늘 배운 interface 문법을 써봅시다.
 */

interface Cart {
    product: string,
    price : number
}

let 장바구니 : Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 


//------------------------------------------------------------//

// [3]
/**
[위에서 만든 타입을 extends 해보기]

갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
```
{ product : '청소기', price : 7000, card : false }
```
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
 */

interface Cart2 extends Cart{
    card: boolean
}

//------------------------------------------------------------//

// [4]
/**
[object 안에 함수를 2개 넣기]

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오.
 */

interface MathObj{
    plus : (a: number, b: number) => number,
    minus : (a: number, b: number) => number,
}

let 계산옵: MathObj = {
    plus(a,b) {
        return a + b;
    },
    minus(a,b) {
        return a - b;
    }
}


// [복습 008] 함수 type 지정은 () => {}