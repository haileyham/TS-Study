//------------------------------------------------------------//

// .js에 있는 변수를 .ts에서 이용하고 싶을 때

/*
html script에 src로 각각 두 파일 연결(일반 html css js 개발시 그냥 <script src="">)
(js 파일) data.js 이 파일에 있던 함수는
(ts > js 변환 파일) index.js 여기서도 사용 가능

하지만 이렇게 하면 ts에서 그냥 사용할 때 에러남(js은 잘 동작하고 html도 출력 잘 됨)
해결방법? declare 문법 사용
*/

//------------------------------------------------------------//
// [declare]
// - 변수 재정의가 가능한 declare 문법
// - 어딘가에 분명 변수 a 가 있는데, 에러내지 말아주세요 뜻으로 사용
// - 일반 js 파일 등에 있던 변수를 사용할 때 에러나지 않도록 재정의할 때 사용

/*
html console 창에 제대로 출력하고 싶으면 밑에 export{} 주석처리해야함
왜냐하면 지역변수 아닌 글로벌 변수 가져오는 것이기 때문에..
일단은 밑의 declare global{} 에러 안나게 하려고 export{} 먼저 해놓음
*/

//------------------------------------------------------------//

declare let 데이터자스파일에서정의: number; // /002. TS/data.js 파일에 저장되어있는 변수
console.log(데이터자스파일에서정의 + 1) // 10001

// (참고) declare로 정의한 내용은 js로 변환되지 않음
// .js로 만든 라이브러리 사용할 때 변수, 함수 같은 것을 declare로 재정의하는데
// jQuery 같은 것 ${} 사용할 때 TypeScript에서는 $ 사용못하기 때문에 declare 재정의해줘야함(함수같은걸로)



//------------------------------------------------------------//
//------------------------------------------------------------//

// [ts파일 → ts 파일]
// import, export 사용

//------------------------------------------------------------//

// 조금더 쉽게 사용하는 법?
// [ts 특징]
// 모든 ts 파일은 ambient module(글로벌 모듈)
// 그래서 그냥 가져와서 써도 사용은 가능함
// 예를들면 010파일에서 정의한 arr10가져오면
// console.log(abc); //근데 난 왜 안됨?크흠..

// ts 파일을 ambient 모듈이 아니라 로컬 모듈로 만들고 싶으면?
// import export 있으면 자동으로 로컬 모듈이기 때문에
// 파일내에 export{} 하나 위에 작성하면 됨

//------------------------------------------------------------//

// 로컬 모듈에서 글로벌 변수 만들고 싶으면
declare global {
    type Happy = string;
} 
export{} //가짜 export 넣어서 외부 모듈로 인식

//하고 다른 ts파일에서 사용하면 됨
let abcd: Happy = 'ham';
console.log(abcd)

// 크흐...잘 모르겠따..에러가 나고 안나고 ㅠㅠ
