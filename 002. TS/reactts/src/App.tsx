import React from 'react';
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


function App() {
    return (
        <div>
            <h4>안녕하세요</h4>
            <Profile></Profile>
        </div>
    );
}

function Profile():JSX.Element { //return 타입 JSX으로 지정 / 실수로 return 값 jsx 말고 number, string 입력했을 때 오류 뿜
    return (
        <div>프로필이다</div>
    )
}

export default App;
