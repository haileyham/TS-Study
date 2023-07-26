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

