// union type
let 동물: string | number | undefined;

// 타입 정의가 너무 길면 Type Aliases (별칭)
// type alias (타입변수) 만드는 법
// type 변수 작명 관습 : 영어대문자 시작 / 뒤에 Type 붙이기 (AnimalType)
type Animal = string | number | undefined; //AnimalType 하면 조금 더 정확
let 동물1: Animal = 'ham';

//------------------------------------------------------------//

//object type 변수에 담기
//union type
let 정보: { name: string, age: number } = { name: 'ham', age: 100 }

// type alias
type Information = { name?: string, age?: number } //obeject 속성안에도 ? 사용가능
let 정보1: Information = { name: 'ham', age: 100 }

// 복습 ?  : {name ? : string} 으로 되어있으면 {name : string | undefined}라는 의미

//------------------------------------------------------------//

// readonly : const 객체 재할당 잠그기
// const 변수는 등호로 재할당만 막기 때문에 const로 담은 object 수정 자유롭게 가능(객체 재할당되는 이유는 변수에 할당된 주소값을 참조하고, 객체를 재할당할 경우 주소값은 변하지 않기 때문. so const 키워드로 선언 후에도 데이터 변경 가능)
// 하지만 typescript 사용하면 object 자료 수정도 막을 수 있음
const 출생지역 = { region: 'seoul' }
출생지역.region = 'universe'

// readonly 사용하여 object 자료 수정 막기
type Animal2 = {
    readonly name : string //실수로 수정하면 에러발생시킴
}

const 동물2 : Animal2 = {
    name : 'cat'
}
// 동물2.name = 'dog' //에러 발생

// 타입스크립트 에러는 에디터 & 터미널에서만 존재
// 실제 변환된 JS파일에서는 에러 발생 안함(실행을 막아주는 것이 아님)

//------------------------------------------------------------//

// type변수 : union type으로 합치기 가능
type Name = string;
type Age = number;
type person = Name | Age;

// & 연산자로 object 타입 extend하기
// & 연산자로 object 타입 합치기
// 나중에 interface 키워드 배울 때 다시 다룸
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // = {x : number, y : number}

let position: NewType = { x: 10, y: 20 };

//(참고) 같은 이름의 type 변수 재정의 불가능
type HelloType = { x : number};
// type HelloType = number; //에러