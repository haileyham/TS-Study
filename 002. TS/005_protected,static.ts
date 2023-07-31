//------------------------------------------------------------//
// class 복사
// extends 사용
//------------------------------------------------------------//

class 클래스원본{
    x = 10; //필드값
}

class 클래스복사 extends 클래스원본{ // class 복사하고 싶으면 extends
}

let 클래스확인 = new 클래스복사();
console.log(클래스확인); //클래스복사  x: 10  [[Prototype]]: 클래스원본

//------------------------------------------------------------//
// (복습) private : private 붙이면 class{} 안에서만 사용가능
//------------------------------------------------------------//

class User10{
    private x = 10; //부모의 사적인 변수라고 생각
}

//------------------------------------------------------------//
// protected : extends 된 class는 사용가능, 자식들 사용불가능
// private : extends 된 class는 사용불가능, 자식들 사용불가능

// private, protected 붙이면 class{} 안에서만 사용가능
//------------------------------------------------------------//

class User11{
    protected x = 10; //부모의 사적인 변수인데 extends된 class{} 안에서도 사용가능
    private private = 10;
}

class 클래스복사2 extends User11{
    x; // protected의 x 사용가능
    doThis() {
        this.x = 20; //protected의 x키워드 가져다가 사용 가능
        return this.x;
    };
    // private; // private 사용불가
}

let 클래스확인2 = new 클래스복사2;
console.log(클래스확인2); //클래스복사2 {x: 10, private: 10} 둘다 확인은 가능
console.log(클래스확인2.doThis());

//------------------------------------------------------------//
// static 키워드
// static 키워드 붙이면 부모 class에 직접 부여됨(자식에게 안물려줌)

// 원래 class내의 x,y같은 변수들은 부모클래스로부터 생성된 object들만 사용가능했는데,
// static 키워드를 붙이면 자식.x 는 불가하고 부모.x만 가능함 (밑에 참고)
//------------------------------------------------------------//

class UserStatic{
    static x = 10; //자식에게 없음
    y = 20;
}

let 스태틱확인 = new UserStatic;
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

class UserPPS {
    private static x = 10;
    public static y = 20;
    z = 10;
}
    
let 클래스확인1 = new UserPPS();
console.log(클래스확인1); // static 사용하면 자식들 물려주지 않음 / UserPPS {z: 10}
console.log(UserPPS.y); // static 사용해서 접근하려면 UserPPS.y 로 접근해야함
console.log(클래스확인1.z); // 일반은 생성된 자식 object.z로 접근

//------------------------------------------------------------//

// js 전문가, python 전문가 각각 나오게 하려면 원래는 constructor쓰면되는데 간단히 하려면 static 사용
class User12{
    static skill = 'js'; //필드값도 일종의 변수라고 생각 / 중요한 것에는 static을 붙여서 자식들에게 물려주지 않도록
    intro = User12.skill + '전문가입니다'; //this.skill이 아닌 User12를 써야함, 왜냐하면 생성된 인스턴스에서 사용못하고 부모class에서 직접 접근해야하기 때문
}

let 전문가요 = new User12();
console.log(전문가요); //User12 {intro: 'js전문가입니다'}

// 직접 바꿔주고
User12.skill = 'Korean'

// 새로
let 전문가요2 = new User12();
console.log(전문가요2); //User12 {intro: 'Korean전문가입니다'}

//------------------------------------------------------------//

// 사실 숨기고 싶으면 protected, private을 사용하는게 나음
// private 쓰고 그 다음에 수정함수 만들어서 사용하는게 더 안전

