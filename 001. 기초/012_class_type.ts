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


//------------------------------------------------------------//
//------------------------------------------------------------//

// [1]
/*
[Car 클래스를 만들기]
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 

(동작 예시)
```
let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300
```
*/

class Car{
    model: string;
    price: number;
    constructor(model:string, price:number) {
        this.model = model;
        this.price = price;
    }

    tax1():number {
        return this.price * 0.1
    }

    tax2(price: number):number {
        const tax = price * 0.1 
        return tax;
    }
}

let car1 = new Car('소나타', 3000) // car1은 Car 클래스의 인스턴스
console.log(car1); // Car {model: '소나타', price: 3000}
console.log(car1.tax1()); //tax 자동
console.log(car1.tax2(3000)); //tax를 직접 숫자입력해서 할 때



//------------------------------------------------------------//

// [2]
/*
[class인데 파라미터가 잔뜩 들어가는 class Word를 만들기]
1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 


(동작 예시)
```
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
```
*/

