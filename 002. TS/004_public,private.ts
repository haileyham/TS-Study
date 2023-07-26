//------------------------------------------------------------//
// class에서 사용하는 
// public 키워드
//------------------------------------------------------------//

class User{
    public name: string; //필드값 왼쪽에 public 키워드 사용 : 모든 자식들이 이용가능
    // 사실 public 사용안하면 숨겨져 있다고 생각하면 됨, public 사용안해도 public 부여되어있음
    constructor(a:string) {
        this.name = a;
    }

    public 함수() {//함수에도 public 키워드 사용 가능
        
    }
}

let 유저1 = new User('ham');
console.log(유저1.name); //ham

유저1.name = "안녕";
console.log(유저1.name); //안녕

//------------------------------------------------------------//
// class에서 사용하는
// private 키워드
// 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴
//------------------------------------------------------------//

class User2{
    private name: string; // private 붙으면 class 안에서만 수정, 이용가능
    constructor(a:string) {
        this.name = a;
    }

}

let 유저2 = new User2('ham2');
// console.log(유저2.name); // 불가

// 유저2.name = "수정불가"; // private 붙으면 class 안에서만 수정, 이용가능
// console.log(유저2.name);

//------------------------------------------------------------//

class User3{
    name: string;
    private familyName: string = "you"; // 실수로 familyName 변경하는 것을 막을 수 있음
    constructor(a:string) {
        this.name = a + this.familyName; //name을 a + familyName으로 설정(a+you);
    }
}

let 유저3 = new User3('hailey');
console.log(유저3); //{familyName: 'you', name: 'haileyyou'}
// 유저3.familyName = "best"; // 실수로 familyName 변경하는 것을 막을 수 있음

//------------------------------------------------------------//

// 자식들이 familyName을 변경하고 싶을때?
// 1. class 안에 familyName 변경 함수 만들기 2. 자식들이 사용

class User4{
    name: string;
    private familyName: string = "you"; // 실수로 familyName 변경하는 것을 막을 수 있음
    constructor(a:string) {
        this.name = a + this.familyName; //name을 a + familyName으로 설정(a+you);
    }

    이름변경함수() {
        this.familyName = "youyou";
    }
}

let 유저4 = new User4('hailey');
console.log(유저4); //{familyName: 'you', name: 'haileyyou'}

유저4.이름변경함수();
console.log(유저4); //{familyName: 'youyou', name: 'haileyyou'}


//------------------------------------------------------------//
