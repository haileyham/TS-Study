//------------------------------------------------------------//
// 타입을 한번에 만들기

let objectt = { name: "ham", age : 100 };
Object.keys(objectt); // objectt가 가진 객체키값들 출력됨 / name, age

//------------------------------------------------------------//
// key of
// key 값을 전부 가져옴
//------------------------------------------------------------//

interface PPerson{
    age: number,
    name:string
}

// keyof PPerson // 왼쪽에 keyof를 붙이면, 오른쪽 PPerson 객체의 키값들을 가져와서 union 타입으로 만들어줌. 즉 이 자리에 새로운 union 타입이 남음. "age"|"name" 타입이 남음

//------------------------------------------------------------//

// PPersonKeys 타입에 keyof PPerson (=age|name의 union 타입) 부여한 것
type PPersonKeys = keyof PPerson;
let aaa: PPersonKeys = "name";
// aaa는 PPersonKeys 리터럴타입으로 부여한 것


//------------------------------------------------------------//
// index signature에다가 keyof 사용하면
//------------------------------------------------------------//

interface PPerson2{
    [key: string] : number // 키값이 문자이면 number 타입으로
}

type PPersonKeys2 = keyof PPerson2;
let aaa2: PPersonKeys2 = "name"; //string | number로 부여됨. key값에는 string만 오게했는데 왜 이러냐하면은~ 객체에서 key값에 숫자올경우 문자화되기 때문에 key값으로 string|number인것이고 그거에는 number type이 온다~라는 의미임

//------------------------------------------------------------//

// 만약 이런 난잡한 코드를 발견할 경우.. string으로 바꾸고 싶을 때
type Carrr = {
    color: boolean,
    model: boolean,
    price: boolean | number
}

// 이렇게 하드 코딩 하는 방법도 있찌만...
type Carrr2 = {
    color: string,
    model: string,
    price: string
}

//------------------------------------------------------------//
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// 타입 변환을 자동으로 해주는 타입변환기 만들어서 사용하기 ★★★
//------------------------------------------------------------//

type TypeChanger<MyType> = {
    [key in keyof MyType] : string
}

type 새로운타입 = TypeChanger<Carrr>

/*
TypeChanger에 Generic <MyType>붙여주기 : 타입 나중에 추후지정하는것
객체에 사용가능!

그렇게 한 다음에 객체 안에는 key 값을 MyType으로 순회하게 하고, 그건 string으로 type 지정해주기

(자세히 살펴보면 
[1] keyof MyType = 파라미터로 들어온 object타입의 key값 = color|model|price 의 leteral union type

[2] key in 구문은 TypeScript에서 mapped type을 정의할 때 사용되는 구문이며 기존의 타입을 변환하여 새로운 타입을 만들어내는데 사용. for...in 루프와 유사한 방식으로 작동. 즉 MyType의 프로퍼티 키들을 순회하며 각각의 프로퍼티에 대한 새로운 타입을 정의한다는 의미)

새로운타입에 TypeChanger지정해주는데 <Carrr>로 <MyType>에 Generic 
즉 MyType에 Carrr 객체타입이 들어감 => key값으로 MyType순회할때 Carrr의 color,model,price가 순회하는 것임

만약 price 부분만 string|number하고 싶으면 다음시간 내용 확인 3항연산자 등 사용하기
*/

//------------------------------------------------------------//
