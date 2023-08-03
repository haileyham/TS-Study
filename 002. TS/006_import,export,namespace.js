"use strict";
//------------------------------------------------------------//
// TypeScript 타입변수 숨기기 문법
// namespace (예전에 사용)
// import,export 없을 때 <script src=""> 여러개 써서 파일 첨부사용
// > 파일 많아질수록 변수명 겹치는 위험 발생하여
// 외부 파일에서 사용하지 않을 변수들은 함수로 감쌌는데 그때
// 타입변수들은 namespace 문법으로 숨겼음
//------------------------------------------------------------//
Object.defineProperty(exports, "__esModule", { value: true });
// 타입명인 Name이 중복되어도 네임스페이스가 1,2로 다르기 때문에 사용가능
var 변변수1 = 'ham';
var 변변수2 = 'ham';
/**
///<reference path ="./a.ts" / >를 사용해서
다른 ts파일에 있는 것을 import 해와서 사용했었음
*/
// 중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespace 안에 써서 export 해줬음 
var MyNamespace;
(function (MyNamespace) {
    ;
})(MyNamespace || (MyNamespace = {}));
var Dog2;
(function (Dog2) {
    ;
})(Dog2 || (Dog2 = {}));
var dog1 = 'haha';
var dog2 = { name: 'hoho' };
