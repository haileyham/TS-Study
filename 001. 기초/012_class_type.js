//------------------------------------------------------------//
var Person2 = /** @class */ (function () {
    function Person2() {
        this.data = 0; // class 필드값(constructor와 똑같은 역할) / 자식들한테서 출력가능 (사람1.data 출력 가능)
        this.data1 = 0; // class 필드 타입지정 가능(위에처럼 안해도 number로 자동 타입지정되기도 함)
    }
    return Person2;
}());
var 사람1 = new Person2();
console.log(사람1.data);
//------------------------------------------------------------//
// TyepeScript constructor()
//------------------------------------------------------------//
var Person3 = /** @class */ (function () {
    function Person3() {
        // this.name = "ham"; //그냥 this.name하면 name의 property값 없다고 나옴
    }
    return Person3;
}());
//------------------------------------------------------------//
var Person4 = /** @class */ (function () {
    function Person4() {
        this.name = "ham"; // constructor 위에서 미리 name 필드값 정했기에, this.name 사용 가능
    }
    return Person4;
}());
//------------------------------------------------------------//
// constructor 파라미터 타입지정 가능
var Person5 = /** @class */ (function () {
    function Person5(a) {
        this.name = a;
    }
    return Person5;
}());
var 사람2 = new Person5("ham");
var 사람3 = new Person5("hailey");
console.log(사람2.name);
console.log(사람3.name);
// 당연히 함수 관련 파라미터 모두 가능
// rest parameter, default parameter 등 가능
//------------------------------------------------------------//
// prototype 함수 어디에?
//------------------------------------------------------------//
var Person6 = /** @class */ (function () {
    function Person6(a) {
        this.name = a;
    }
    Person6.prototype.함수 = function (a) {
        // 함수랑 똑같이 파라미터 & retrun 타입 지정 가능
        console.log("안녕~! " + a);
        return "a";
    };
    return Person6;
}());
// Person6.prototype.함수다 = function(){} //여기에 하는 것이 아니라 위에 constructor 밑에다가 추가하면 됨
var 사람4 = new Person6("toto");
사람4.함수("반가워 토토"); // 사람4에서 Person6의 프로토타입 출력 가능
