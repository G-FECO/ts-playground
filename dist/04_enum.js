"use strict";
// (1) 숫자형 이넘
// (만약 초기값을 주지 않으면 0부터 차례대로 증가한다.)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Brown"] = 7] = "Brown";
})(Color || (Color = {}));
console.log(Color.Blue); // 5
// (2) 문자형 이넘
// (문자형 이넘은 enum 값 전부 다 특정 문자 또는 다른 enum 값으로 초기화 해줘야 한다.)
// (또한, 문자형 이넘에는 숫자형 이넘과 달리 auto-incrementing이 없다.)
var Country;
(function (Country) {
    Country["Korea"] = "Korea";
    Country["USA"] = "USA";
})(Country || (Country = {}));
// (3) 리버스 매핑
// (숫자형 이넘에만 존재하는 개념으로 enum의 key로 value를 얻을 수 있고 value로 key를 얻을 수 있다.)
var ReverseEnum;
(function (ReverseEnum) {
    ReverseEnum[ReverseEnum["A"] = 0] = "A";
    ReverseEnum[ReverseEnum["B"] = 1] = "B";
})(ReverseEnum || (ReverseEnum = {}));
var a = ReverseEnum.A; // key로 value 얻기
var keyA = ReverseEnum[a]; // value로 key 얻기
