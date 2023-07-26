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
