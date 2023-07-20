//------------------------------------------------------------//
// 009.html의 <h1>안의 글자 변경
//------------------------------------------------------------//

let 타이틀 = document.querySelector("#title");
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
    타이틀.innerHTML = "반가워용"
}

// [2]
if (타이틀 instanceof Element) {//HTML이 Element로 오는 것인지 확인 > true로 볼록문 실행
    // 추후 class에서 object가 class의 자식, instance인지를 확인
    타이틀.innerHTML = "반가워용"
}

// [3]
let 타이틀1 = document.querySelector("#title123잘못입력") as Element;
// as 키워드 사용해서 id 값 입력 잘못해도 Element로 타입지정

// [4]
if (타이틀?.innerHTML != undefined) {
    타이틀.innerHTML = "반가웡"
}
// 오브젝트에 붙이는 ?.
//1. 타이틀에 innerHTML이 있으면 출력
//2. 없으면 undefined

// [5]
// tsconfig.json의 strict false로 바꾸기 or (타입스크립트 그냥 쓰지말기zZ)

//------------------------------------------------------------//
// 009.html의 <a> href 변경
//------------------------------------------------------------//

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) { //<a>에 필요한 정확한 타입명이 존재
    링크.href = "https://www.google.com"
}

// Element
// HTMLAnchorElement 타입(href / style / class ~~~ : object 타입정의 잘 되어있음)
// HTMLHeadingElement 타입(h1 ~~~)
// HTMLButtonElement 타입(button ~~~)

//------------------------------------------------------------//
// 009.html의 <button>에 이벤트리스너 부착
//------------------------------------------------------------//

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () { // #button 못찾으면 undefined 출력되도록 ?. optional chaining 사용
    console.log('hello')
})

