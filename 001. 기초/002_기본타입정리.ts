// 타입스크립트 기본 타입 정리(primitive types)

//다른 곳(001)에서 이미 이름이라는 변수명을 사용했기에 에러뜸
//만약 둘다 var 쓰면 하나로 가넝
// var 이름: string = 'ham';

//변수에 타입 지정 가능 = 변수에 실드 씌운다 생각
//(장점) 타입이 실수로 변경될 때 에러
const 이름5: string = 'ham';
const 나이3: number = 100;
const 외계인: null = null; //undefined, null 타입도 존재

//array 자료 타입 지정
const 회원: string[] = ['ham', 'je']

//array 숫자랑 문자 동시 넣으려면? Union type(003파일)

//object 자료형
let 내정보: { age: number } = { age: 100 }


//------------------------------------------------------------//

/*
[변수 생성시 타입스크립트가 타입을 자동으로 부여해줌]
- 간단한 변수들은 타입 생략
- 에러메시지는 tsc -w 명령어 실행중인 터미널에 뜸
- 터미널 탭 옆의 problems 탭에도 나옴
*/


// :string, :num 등 타입 명시하지 않아도 변수명에 마우스 올리면 확인 가능
let 이름6 = 'ham';
let 나이4 = 20;

// 변수 만들고, 나중에 할당해도 타입 자동으로 변환
let 이름7;
이름 = 'ham';

//------------------------------------------------------------//

//한번에
let project :{ member: string[], days :number, started : boolean} = {member : ['ham', 'hailey'], days : 30, started : true,
}

//보기 편하도록 띄움
let project2: {
    member: string[],
    days: number,
    started: boolean,
} = {
    member: ['ham', 'hailey'],
    days: 30,
    started: true,
}
