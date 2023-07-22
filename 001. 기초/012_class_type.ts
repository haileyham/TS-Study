//------------------------------------------------------------//

class Person2{
    data = 0; // class 필드값(constructor와 똑같은 역할) / 자식들한테서 출력가능 (사람1.data 출력 가능)
    data1: number = 0; // class 필드 타입지정 가능(위에처럼 안해도 number로 자동 타입지정되기도 함)
}

let 사람1 = new Person2();
console.log(사람1.data)

//------------------------------------------------------------//
// TyepeScript constructor()
//------------------------------------------------------------//

class Person3{
    constructor() {
        // this.name = "ham"; //그냥 this.name하면 name의 property값 없다고 나옴
    }
}

//------------------------------------------------------------//

class Person4{
    name: string; //필드값에 미리 지정해놔야 밑에서 this.name 사용가능
    constructor() {
        this.name = "ham" // constructor 위에서 미리 name 필드값 정했기에, this.name 사용 가능
    }
}

//------------------------------------------------------------//

// constructor 파라미터 타입지정 가능
class Person5{
    name: string;
    constructor(a : string) { //파라미터 타입지정 / return 타입도 지정? => 복제되는게 항상 object이기에 return 타입 지정할 이유는 없음
        this.name = a;
    }
}

let 사람2 = new Person5("ham");
let 사람3 = new Person5("hailey");
console.log(사람2.name);
console.log(사람3.name);

// 당연히 함수 관련 파라미터 모두 가능
// rest parameter, default parameter 등 가능

//------------------------------------------------------------//
// prototype 함수 어디에?
//------------------------------------------------------------//

class Person6{
    name: string;
    constructor(a:string) {
        this.name = a;
    }

    함수(a: string) { // 프로토타입 함수 추가 이곳에 / 프로토타입 파라미터 타입 지정 가능 / 모든 자식들은 사용 가능
        // 함수랑 똑같이 파라미터 & retrun 타입 지정 가능
        console.log("안녕~! " + a);
        return "a"
    }
}

// Person6.prototype.함수다 = function(){} //여기에 하는 것이 아니라 위에 constructor 밑에다가 추가하면 됨

let 사람4 = new Person6("toto");
사람4.함수("반가워 토토"); // 사람4에서 Person6의 프로토타입 출력 가능