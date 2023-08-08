//------------------------------------------------------------//
// 타입을 한번에 만들기
var objectt = { name: "ham", age: 100 };
Object.keys(objectt); // objectt가 가진 객체키값들 출력됨 / name, age
var aaa = "name";
var aaa2 = "name"; //string | number로 부여됨. key값에는 string만 오게했는데 왜 이러냐하면은~ 객체에서 key값에 숫자올경우 문자화되기 때문에 key값으로 string|number인것이고 그거에는 number type이 온다~라는 의미임
