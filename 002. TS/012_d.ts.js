"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
//------------------------------------------------------------//
// 다른 파일에서 import 하여서 사용
var 나이나이;
//------------------------------------------------------------//
// import / export 할게 많으면 namespace 쓰거나
// import * as 사용
//------------------------------------------------------------//
// 모든 타입을 정리해 놓은 레퍼런스용으로 d.ts 파일 사용
// tsconfig.json 에 "declaration":true 추가해주면 됨
// ts파일 만들때마다 d.ts 파일 같이 생성해주는데 type정리해놓기때문에 레퍼런스용으로 좋음(d.ts 자동생성되는 경우 > d.ts 파일수정 하지말기)
//------------------------------------------------------------//
//------------------------------------------------------------//
// [d.ts 파일 용도]
// 1. 타입정의 따로 보관할 파일이 필요할 때 (export,import 해와서 사용)
// 2. 타입 레퍼런스 생성하고 싶을 때 (tsconfig.json "declareation":true)
//------------------------------------------------------------//
// 외부라이브러리 사용할 때 타입정의 안되어있으면 에러발생
// jQuery 같은 것 사용할 때 직접 타입정의를 해야하는데,
// Definitely Typed github 레파지토리 사용(유명 라이브러리 타입 지정해서 올려놓음)
// (https://github.com/DefinitelyTyped/DefinitelyTyped)
// 혹은 Typescript 공홈에 들어가서 가져오기
// (https://www.typescriptlang.org/dt/search?search=)
// 그리고 유명 라이브러리 같은 경우 npm 설치시엔 대부분 타입도 들어옴
// node_modules의 @types 폴더
// (참고) typeRoots 따로 설정해 놓을 경우 자동으로 @types 포함 안해주기 때문에 @types를 추가하든가 혹은 다 지우든가 해야함(@types폴더의 경우 만약 typeRoots가 따로없으면 그냥 자동으로 찾아서 해줌)
