//------------------------------------------------------------//
// 009.html의 <h1>안의 글자 변경
//------------------------------------------------------------//
var 타이틀 = document.querySelector("#title");
// 타이틀.innerHTML = "반가워" //error발생 / 마우스 갖다대면 element|null이라고 뜸(union type이라고)
// why element|null ?
// >>> querySelector로 #title 잘 찾으면 상관없는데, 실수로 다른거 기입할 경우 id 매칭이 안 됐을 때 null 이 남기 때문
// 해결하려면 타입을 하나로 narrowing 하기
//------------------------------------------------------------//
// type narrowing
// HTML 조작시 narrowing하는 방법 5개
// 1. if
// 2. instanceof 연산자 (가장 많이 사용하게 됨)
// 3. as
// 4. ?. (optional chaining)
// 5. tsconfig.json의 strict false로 바꾸기 or (타입스크립트 그냥 쓰지말기zZ)
//------------------------------------------------------------//
// [1]
if (타이틀 != null) {
    타이틀.innerHTML = "반가워용";
}
// [2]
if (타이틀 instanceof Element) { //HTML이 Element로 오는 것인지 확인 > true로 볼록문 실행
    // 추후 class에서 object가 class의 자식, instance인지를 확인
    타이틀.innerHTML = "반가워용";
}
// [3]
var 타이틀1 = document.querySelector("#title123잘못입력");
// as 키워드 사용해서 id 값 입력 잘못해도 Element로 타입지정
// [4]
if ((타이틀 === null || 타이틀 === void 0 ? void 0 : 타이틀.innerHTML) != undefined) {
    타이틀.innerHTML = "반가웡";
}
// 오브젝트에 붙이는 ?.
//1. 타이틀에 innerHTML이 있으면 출력
//2. 없으면 undefined
// [5]
// tsconfig.json의 strict false로 바꾸기 or (타입스크립트 그냥 쓰지말기zZ)
//------------------------------------------------------------//
// 009.html의 <a> href 변경
//------------------------------------------------------------//
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) { //<a>에 필요한 정확한 타입명이 존재
    링크.href = "https://www.google.com";
}
// Element
// HTMLAnchorElement 타입(href / style / class ~~~ : object 타입정의 잘 되어있음)
// HTMLHeadingElement 타입(h1 ~~~)
// HTMLButtonElement 타입(button ~~~)
//------------------------------------------------------------//
// 009.html의 <button>에 이벤트리스너 부착
//------------------------------------------------------------//
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    console.log('hello');
});
//------------------------------------------------------------//
//------------------------------------------------------------//
// [1]
/**
<버튼을 누르면 이미지를 바꾸기>
```
<img id="image" src="test.jpg">
```
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
 */
var 이미지버튼 = document.querySelector("#button");
이미지버튼 === null || 이미지버튼 === void 0 ? void 0 : 이미지버튼.addEventListener("click", function () {
    var 이미지 = document.querySelector("#image");
    if (이미지 instanceof HTMLImageElement) { //#image가 HTMLImageElement가 맞으면 실행
        이미지.src = "https://raw.githubusercontent.com/haileyham/character/main/%EC%BA%A1%EC%B2%98.JPG";
    }
});
// 별사진 처음으로 해놓고
// 버튼안에 이미지넣고 별이미지 누르면 내 캐릭터로 변경되도록 했음
//------------------------------------------------------------//
// [2]
/**
<바꾸고 싶은 html 요소가 많을 때>
```
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
```
<img id="image" src="test.jpg">
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://www.kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요?
 */
// forEach
var 링크2 = document.querySelectorAll(".naver");
링크2.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://www.kakao.com";
    }
});
// 일반 for 반복문
var 링크3 = document.querySelectorAll('.naver');
for (var i = 0; i < 3; i++) {
    var a = 링크3[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://www.kakao.com";
    }
}
