//------------------------------------------------------------//
// class에서 사용하는 
// public 키워드
//------------------------------------------------------------//
var User = /** @class */ (function () {
    // 사실 public 사용안하면 숨겨져 있다고 생각하면 됨, public 사용안해도 public 부여되어있음
    function User(a) {
        this.name = a;
    }
    User.prototype.함수 = function () {
    };
    return User;
}());
var 유저1 = new User('ham');
console.log(유저1.name); //ham
유저1.name = "안녕";
console.log(유저1.name); //안녕
//------------------------------------------------------------//
// class에서 사용하는
// private 키워드
// 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴
//------------------------------------------------------------//
var User2 = /** @class */ (function () {
    function User2(a) {
        this.name = a;
    }
    return User2;
}());
var 유저2 = new User2('ham2');
// console.log(유저2.name); // 불가
// 유저2.name = "수정불가"; // private 붙으면 class 안에서만 수정, 이용가능
// console.log(유저2.name);
//------------------------------------------------------------//
var User3 = /** @class */ (function () {
    function User3(a) {
        this.familyName = "you"; // 실수로 familyName 변경하는 것을 막을 수 있음
        this.name = a + this.familyName; //name을 a + familyName으로 설정(a+you);
    }
    return User3;
}());
var 유저3 = new User3('hailey');
console.log(유저3); //{familyName: 'you', name: 'haileyyou'}
// 유저3.familyName = "best"; // 실수로 familyName 변경하는 것을 막을 수 있음
//------------------------------------------------------------//
// 자식들이 familyName을 변경하고 싶을때?
// 1. class 안에 familyName 변경 함수 만들기 2. 자식들이 사용
var User4 = /** @class */ (function () {
    function User4(a) {
        this.familyName = "you"; // 실수로 familyName 변경하는 것을 막을 수 있음
        this.name = a + this.familyName; //name을 a + familyName으로 설정(a+you);
    }
    User4.prototype.이름변경함수 = function () {
        this.familyName = "youyou";
    };
    return User4;
}());
var 유저4 = new User4('hailey');
console.log(유저4); //{familyName: 'you', name: 'haileyyou'}
유저4.이름변경함수();
console.log(유저4); //{familyName: 'youyou', name: 'haileyyou'}
//------------------------------------------------------------//
// public 키워드 사용하면 this.~~ 생략가능
//------------------------------------------------------------//
var User5 = /** @class */ (function () {
    function User5() {
    }
    return User5;
}());
new User5;
//------------------------------------------------------------//
// constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능
var User6 = /** @class */ (function () {
    function User6(name, age) {
        this.name = name;
        this.age = age;
    }
    return User6;
}());
var 유저6 = new User6('생략', 10);
console.log(유저6); // User6 {name: '생략', age: 10}
