//------------------------------------------------------------//
// interface : Object에 type 지정
//------------------------------------------------------------//
;
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'ham' };
var 선생 = { name: 'hailey', age: 20 };
var 학생1 = { name: 'ham' };
var 선생1 = { name: 'hailey', age: 20 };
var 학생Test = { name: 'ham', score: 100 };
// let 학생Test1: StudentTest55 = { name: 'ham' }; //여기 name에서 에러 발생
// & : 합치는게 아니라 왼,오른쪽 둘다 만족하는 타입이기 때문
// name이 name이고 number이고 둘다 만족할 수는 없음
