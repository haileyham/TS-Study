import React, { useState } from 'react';
import './App.css';
//------------------------------------------------------------//
// npm start 하고 모듈 오류있었는데
// node.js 최신버전 재설치하고 프로젝트 삭제후 재생성하니까 정상작동
//------------------------------------------------------------//

// 2. JSX 표현하는 타입
// let 박스: JSX.Element = <div></div>;

//------------------------------------------------------------//

// 3. component 만들 때 타입지정
/**
function Profile() {
    return (
        <div>프로필이다</div>
    )
}
*/

//------------------------------------------------------------//

// 4. component props 타입지정
/*
<Profile name="hailey" age="10" ></Profile>
function Profile(props:{name:string, age:string}): JSX.Element{}
*/

//------------------------------------------------------------//

// 5. useState 타입지정
// 자동으로 타입부여됨
// 만일 string|number 하고 싶으면
// useState<string|number>('ham') 하면됨 -거의 쓸 일 없음

//------------------------------------------------------------//


function App() {
    // (2. JSX 표현하는 타입)
    let 박스: JSX.Element = <div>ㅇㅇ</div>;
    // (5. useState 타입지정)
    let [user, setUser] = useState('ham');
    let [user1, setUser1] = useState<string | number>('ham');

    return (
        <div>
            {박스}
            <h4>안녕하세요</h4>
            <Profile name="hailey" age="10" ></Profile>
            {/* props로 name age 보내기 */}
        </div>
    );
}


// (3. 컴포넌트 타입지정)
// (4. 컴포넌트 props 타입지정)
function Profile(props:{name:string, age:string}): JSX.Element { //return 타입 JSX으로 지정 / 실수로 return 값 jsx 말고 number, string 입력했을 때 오류 뿜
    //props는 위에서 name,age로 보낸거 {name:"hailey", age:10} object에 담아져서 옴. 타입지정은 객체처럼 props:{name:string, age:string}
    // type alias 사용가능 
    
    return (
        <div>프로필이다. {props.name}입니다. 나이는 {props.age}입니다.</div>
    )
}

export default App;