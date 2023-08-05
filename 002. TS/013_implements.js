//------------------------------------------------------------//
// implements
// interface는 object 타입 지정할 때 사용하는데, 사실 용도가 하나 더 있다.
// class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있는데 이때 implements 키워드가 필요하다.
//------------------------------------------------------------//
// implements
//------------------------------------------------------------//
// class CCar로부터 생산되는 object들은 model, price 속성을 가짐
//만약 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶다면, interface + implements 키워드로 확인
var CCar = /** @class */ (function () {
    function CCar(a) {
        this.price = 1000;
        this.model = a;
    }
    return CCar;
}());
var 붕붕카 = new CCar('universe');
var CCar2 = /** @class */ (function () {
    function CCar2(a) {
        this.price = 1000;
        this.model = a;
    }
    return CCar2;
}());
var 붕붕카2 = new CCar2('super');
var CCar3 = /** @class */ (function () {
    function CCar3() {
    }
    CCar3.prototype.tax = function (a) {
        return a * 0.1;
    };
    return CCar3;
}());
// 위에서 Class CCar3에 implements 키워드로 CCarType2를 이용했는지 확인
// interface CCarType2에 파라미터 type number로 했어도, 실제 class의 tax파라미터는 number가 아닌 any로 들어감, 함수 타입도 똑같이 반영 안되어있음
// 이유는 implements는 class 타입을 체크하는 용도이지 할당하는게 아니기 때문!
