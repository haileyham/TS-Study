//------------------------------------------------------------//

// implements
// interface는 object 타입 지정할 때 사용하는데, 사실 용도가 하나 더 있다.
// class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있는데 이때 implements 키워드가 필요하다.

//------------------------------------------------------------//
// implements
//------------------------------------------------------------//

// class CCar로부터 생산되는 object들은 model, price 속성을 가짐
//만약 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶다면, interface + implements 키워드로 확인
class CCar{
    model: string;
    price: number = 1000;
    constructor(a: string) {
        this.model = a;
    }
}

let 붕붕카 = new CCar('universe');

//------------------------------------------------------------//


interface CCarType{
    model: string,
    price: number
}

class CCar2 implements CCarType{ // class 이름 우측에 implements를 쓰고 interface 이름을 쓰면 "이 class가 이 interface에 있는 속성을 다 들고있어?"라고 확인 가능
    // 다 들고 있으면 정상, 빠진속성있으면 에러
    model: string;
    price: number = 1000;
    constructor(a: string) {
        this.model = a
    }
}

let 붕붕카2 = new CCar2('super');


//------------------------------------------------------------//
// implements는 타입지정문법이 아님
// -implements는 interface에 들어있는 속성을 가지고 있는지 확인만 하는 뜻이기 때문에 class에 타입을 할당하고 변형시키는 키워드가 아님
//------------------------------------------------------------//

interface CCarType2{
    model: string,
    tax: (price: number) => number;
}

class CCar3 implements CCarType2{
    model; // any 타입
    tax(a) { // 파라미터 a는 any 타입
        return a * 0.1
    }
}

// 위에서 Class CCar3에 implements 키워드로 CCarType2를 이용했는지 확인
// interface CCarType2에 파라미터 type number로 했어도, 실제 class의 tax파라미터는 number가 아닌 any로 들어감, 함수 타입도 똑같이 반영 안되어있음
// 이유는 implements는 class 타입을 체크하는 용도이지 할당하는게 아니기 때문!

