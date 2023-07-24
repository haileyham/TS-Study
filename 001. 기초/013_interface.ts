//------------------------------------------------------------//
// interface : Object에 type 지정
//------------------------------------------------------------//

// type Square = { color: string, width: number };
interface Square { //여기서는 위에 type과 동일
    color: string,
    width: number
};
let 네모: Square = { color: 'red', width: 100 };

//------------------------------------------------------------//
// interface vs type 알아보기
// [1]
// [2]
//------------------------------------------------------------//

// 기본
interface Student {
    name: string;
}
interface Teacher{
    name: string,
    age : number
}

let 학생:Student = { name: 'ham' }
let 선생:Teacher = { name : 'hailey', age : 20}


//------------------------------------------------------------//
// [1] 다른점
// interface 장점 : extends로 복사가능
//------------------------------------------------------------//

interface Student1 {
    name: string;
}
interface Teacher1 extends Student1{ // extends
    age : number
}

let 학생1:Student = { name: 'ham' }
let 선생1:Teacher = { name : 'hailey', age : 20}

//------------------------------------------------------------//

// type에서는 : & 기호 intersection type 으로 가능
// interface의 extends랑 다른점은 : &(=intersection type)은 두 타입을 전부 만족하는 타입
// interface의 extends는 복사해주세요

type Student2 = { name: string };
type Teacher2 = { age: number } & Student2;


//------------------------------------------------------------//
// [2] 다른점
// interface : 중복선언 가능(합쳐짐)
// type : 중복선언 불가능
//------------------------------------------------------------//

// interface 중복선언 가능
interface StudentTest{
    name: string;
}

interface StudentTest{
    score: number;
}

let 학생Test: StudentTest = { name: 'ham', score: 100 };

// 외부 라이브러리 같은 경우 interface 많이 사용
// 추후 타입에 뭔가를 추가하는 것이 쉬움
// 다른 사람이 이용을 많이할 것 같으면 object 타입 정할 때 interface 사용

//------------------------------------------------------------//

// type 중복 선언 불가능
type StudentTest2 = { name: string };
// type StudentTest2 = { score: number };


//------------------------------------------------------------//
// [2] -2 추가
//------------------------------------------------------------//

// 만약 extends 사용 할 때 중복 속성 발생할 경우? > 에러
interface StudentTest3{
    name: string;
}

interface TeacherTest3 extends StudentTest3{
    // name: string; // 독같아서 ㄱㅊ
    // name: number; // extends로 가져온것에 name : string 되어있기 때문에 name:number불가
}

//------------------------------------------------------------//

// type & 사용할 때 중복속성 발생하면?  미리 에러가 나지 않아서 주의
type StudentTest4 = { name: string };
type StudentTest55 = { name: number } & StudentTest4; //여기서는 에러 발생 안함

// let 학생Test1: StudentTest55 = { name: 'ham' }; //여기 name에서 에러 발생

// & : 합치는게 아니라 왼,오른쪽 둘다 만족하는 타입이기 때문
// name이 name이고 number이고 둘다 만족할 수는 없음