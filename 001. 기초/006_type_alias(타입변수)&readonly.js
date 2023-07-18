// union type
var 동물;
var 동물1 = 'ham';
//------------------------------------------------------------//
//object type 변수에 담기
//union type
var 정보 = { name: 'ham', age: 100 };
var 정보1 = { name: 'ham', age: 100 };
// 복습 ?  : {name ? : string} 으로 되어있으면 {name : string | undefined}라는 의미
//------------------------------------------------------------//
// readonly : const 객체 재할당 잠그기
// const 변수는 등호로 재할당만 막기 때문에 const로 담은 object 수정 자유롭게 가능(객체 재할당되는 이유는 변수에 할당된 주소값을 참조하고, 객체를 재할당할 경우 주소값은 변하지 않기 때문. so const 키워드로 선언 후에도 데이터 변경 가능)
// 하지만 typescript 사용하면 object 자료 수정도 막을 수 있음
var 출생지역 = { region: 'seoul' };
출생지역.region = 'universe';
var 동물2 = {
    name: 'cat'
};
var position = { x: 10, y: 20 };
// type HelloType = number; //에러
