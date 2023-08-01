//------------------------------------------------------------//
// class 복사
// extends 사용
//------------------------------------------------------------//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var 클래스원본 = /** @class */ (function () {
    function 클래스원본() {
        this.x = 10; //필드값
    }
    return 클래스원본;
}());
var 클래스복사 = /** @class */ (function (_super) {
    __extends(클래스복사, _super);
    function 클래스복사() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return 클래스복사;
}(클래스원본));
var 클래스확인 = new 클래스복사();
console.log(클래스확인); //클래스복사  x: 10  [[Prototype]]: 클래스원본
//------------------------------------------------------------//
// (복습) private : private 붙이면 class{} 안에서만 사용가능
//------------------------------------------------------------//
var User10 = /** @class */ (function () {
    function User10() {
        this.x = 10; //부모의 사적인 변수라고 생각
    }
    return User10;
}());
//------------------------------------------------------------//
// protected : extends 된 class는 사용가능, 자식들 사용불가능
// private : extends 된 class는 사용불가능, 자식들 사용불가능
// private, protected 붙이면 class{} 안에서만 사용가능
//------------------------------------------------------------//
var User11 = /** @class */ (function () {
    function User11() {
        this.x = 10; //부모의 사적인 변수인데 extends된 class{} 안에서도 사용가능
        this.private = 10;
    }
    return User11;
}());
var 클래스복사2 = /** @class */ (function (_super) {
    __extends(클래스복사2, _super);
    function 클래스복사2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    클래스복사2.prototype.doThis = function () {
        this.x = 20; //protected의 x키워드 가져다가 사용 가능
        return this.x;
    };
    ;
    return 클래스복사2;
}(User11));
var 클래스확인2 = new 클래스복사2;
console.log(클래스확인2); //클래스복사2 {x: 10, private: 10} 둘다 확인은 가능
console.log(클래스확인2.doThis());
//------------------------------------------------------------//
// static 키워드
// static 키워드 붙이면 부모 class에 직접 부여됨(자식에게 안물려줌)
// 원래 class내의 x,y같은 변수들은 부모클래스로부터 생성된 object들만 사용가능했는데,
// static 키워드를 붙이면 자식.x 는 불가하고 부모.x만 가능함 (밑에 참고)
//------------------------------------------------------------//
var UserStatic = /** @class */ (function () {
    function UserStatic() {
        this.y = 20;
    }
    UserStatic.x = 10; //자식에게 없음
    return UserStatic;
}());
var 스태틱확인 = new UserStatic;
console.log(스태틱확인); //UserStatic {y: 20}
// console.log(스태틱확인.x); //불가능, static 붙였기 때문에 자식에서 가져다 쓸 수 없음
console.log(스태틱확인.y); //가넝
// static x 가져다 쓰려면?
console.log(UserStatic.x); //이렇게 부모.x로 부모만 가져다 쓸 수 있음
// console.log(UserStatic.y); //원래 안되는것임(자식만 가져다쓸수있음) / y변수는 User로부터 생성된 object들만 사용가능했는데, static 키워드를 붙이면 직접사용가능
// 본연의 기능 역행...
//------------------------------------------------------------//
// private / protected / public + static 가능
//------------------------------------------------------------//
var UserPPS = /** @class */ (function () {
    function UserPPS() {
        this.z = 10;
    }
    UserPPS.x = 10;
    UserPPS.y = 20;
    return UserPPS;
}());
var 클래스확인1 = new UserPPS();
console.log(클래스확인1); // static 사용하면 자식들 물려주지 않음 / UserPPS {z: 10}
console.log(UserPPS.y); // static 사용해서 접근하려면 UserPPS.y 로 접근해야함
console.log(클래스확인1.z); // 일반은 생성된 자식 object.z로 접근
//------------------------------------------------------------//
// js 전문가, python 전문가 각각 나오게 하려면 원래는 constructor쓰면되는데 간단히 하려면 static 사용
var User12 = /** @class */ (function () {
    function User12() {
        this.intro = User12.skill + '전문가입니다'; //this.skill이 아닌 User12를 써야함, 왜냐하면 생성된 인스턴스에서 사용못하고 부모class에서 직접 접근해야하기 때문
    }
    User12.skill = 'js'; //필드값도 일종의 변수라고 생각 / 중요한 것에는 static을 붙여서 자식들에게 물려주지 않도록
    return User12;
}());
var 전문가요 = new User12();
console.log(전문가요); //User12 {intro: 'js전문가입니다'}
// 직접 바꿔주고
User12.skill = 'Korean';
// 새로
var 전문가요2 = new User12();
console.log(전문가요2); //User12 {intro: 'Korean전문가입니다'}
//------------------------------------------------------------//
// 사실 숨기고 싶으면 protected, private을 사용하는게 나음
// private 쓰고 그 다음에 수정함수 만들어서 사용하는게 더 안전
//------------------------------------------------------------//
//------------------------------------------------------------//
//[1]
/*
다음 x, y, z 속성의 특징을 설명해보십시오.
```
class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
}
```
x와 y는 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들
*/
/*
우선 x와 y는 static 키워드로 인하여 부모요소에서만 접근해서 사용할 수 있다.(인스턴스.x 혹은 인스턴스.y 불가 // User.x 혹은 User.y 로만 접근 가능)
private static x는 class내부에서만 수정이 가능하고, public static y는 class 내외부 상관없이 수정이 가능하다.
의 경우 extends로 복사를 했을 때, 사용이 가능하다.
*/
// 이하 직접 경험해보기
var UserTTT = /** @class */ (function () {
    function UserTTT() {
        this.z = 30;
    }
    UserTTT.prototype.함수 = function () {
        UserTTT.x;
        // this.x; // 자식요소들 사용불가로 this 대신에 UserTTT사용해야함
        UserTTT.y;
        // this.y;
        // UserTTT.z; // 일반의 경우 그냥 this사용
        this.z;
    };
    UserTTT.x = 10;
    UserTTT.y = 20;
    return UserTTT;
}());
var UserTTT복사 = /** @class */ (function (_super) {
    __extends(UserTTT복사, _super);
    function UserTTT복사() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserTTT복사;
}(UserTTT));
var 테스트복사사 = new UserTTT();
var 테스트복사사2 = new UserTTT복사();
// console.log(UserTTT.x); // private은 class 외부에서 접근 불가
console.log(UserTTT.y); // public은 class 내외부 접근 가능
console.log(테스트복사사2.z); // protected는 extends 내부에서 사용가능(사실 protected도 private과 유사하게 class 내부에서만 사용 가능)
//------------------------------------------------------------//
//[2]
/*
x 속성에 숫자를 더해주는 함수가 필요합니다.
```
class User {
    private static x = 10;
    public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
```
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
(조건) private static x = 10; 이 코드 수정금지
*/
var User13 = /** @class */ (function () {
    function User13() {
    }
    User13.addOne = function (num) {
        User13.x += num; //+ 를 쓰면 그냥 더하기임. +=는 대입
    };
    User13.printX = function () {
        return User13.x;
    };
    User13.x = 10;
    User13.y = 20;
    return User13;
}());
User13.addOne(3);
console.log(User13.printX());
//------------------------------------------------------------//
//[3]
/*
이런거 어떻게 만들게요

웹 요소 애니메이팅하는거 이런 것의 기초 격인데
```
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
```
이렇게 네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/
var Square = /** @class */ (function () {
    function Square(x, y, z) {
        this.width = x;
        this.height = y;
        this.color = z;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var squareRandom = document.createElement("div");
        squareRandom.style.position = "absolute";
        squareRandom.style.top = "".concat(a * 300, "px");
        squareRandom.style.left = "".concat(a * 400, "px");
        squareRandom.style.width = "".concat(this.width, "px");
        squareRandom.style.height = "".concat(this.height, "px");
        squareRandom.style.backgroundColor = "".concat(this.color);
        document.body.appendChild(squareRandom);
    };
    return Square;
}());
var 네모랜덤 = new Square(50, 50, 'rgba(130,150,255,0.5)');
네모랜덤.draw();
네모랜덤.draw();
네모랜덤.draw();
네모랜덤.draw();
//------------------------------------------------------------//
var Square1 = /** @class */ (function () {
    function Square1(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square1.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n        top:".concat(a * 400, "px; \n        left:").concat(a * 400, "px; \n        width:").concat(this.width, "px; \n        height : ").concat(this.height, "px; \n        background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square1;
}());
var 네모1 = new Square1(30, 30, 'red');
네모1.draw();
