//------------------------------------------------------------//
// class 복사
// extends 사용
//------------------------------------------------------------//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var 클래스원본 = /** @class */ (function () {
    function 클래스원본() {
        this.x = 10;
    }
    return 클래스원본;
}());
var 클래스복사 = /** @class */ (function (_super) {
    __extends(클래스복사, _super);
    function 클래스복사() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return 클래스복사;
}(클래스원본));
var 클래스확인 = new 클래스복사();
console.log(클래스확인);