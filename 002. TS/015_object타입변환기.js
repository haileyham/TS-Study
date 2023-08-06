//------------------------------------------------------------//
// 타입을 한번에 만들기
var objectt = { name: "ham", age: 100 };
Object.keys(objectt); // objectt가 가진 객체키값들 출력됨 / name, age
var aaa = "name";
var aaa2 = "name"; //string | number로 부여됨. key값에는 string만 오게했는데 왜 이러냐하면은~ 객체에서 key값에 숫자올경우 문자화되기 때문에 key값으로 string|number인것이고 그거에는 number type이 온다~라는 의미임
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
//------------------------------------------------------------//
// quiz
//------------------------------------------------------------//
//[1]
/*
[다음 타입을 변환기 돌려보기]
```
type Bus = {
    color : string,
    model : boolean,
    price : number
}
```
동료가 잘못 만든 타입.
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
1. 변환기 하나 만들고
2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보기
*/
//------------------------------------------------------------//
//[2]
/*
이런 변환기는 어떻게 만들어야할까요?
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/ 
