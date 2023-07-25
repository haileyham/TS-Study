//------------------------------------------------------------//
// interface : Object에 type 지정
//------------------------------------------------------------//
;
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'ham' };
var 선생 = { name: 'hailey', age: 20 };
var 학생1 = { name: 'ham' };
var 선생1 = { name: 'hailey', age: 20 };
var 학생Test = { name: 'ham', score: 100 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var 계산옵 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
// [복습 008] 함수 type 지정은 () => {}
