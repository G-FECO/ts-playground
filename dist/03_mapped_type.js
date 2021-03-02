"use strict";
// ex1) 배열을 받아서 맵드 타입으로 선언하는 경우
// (menu object에 있는 음식들의 가격합 구하기)
var foods = ['noodle', 'rice'];
var menu = {
    noodle: 10000,
    rice: 8000,
};
var sumPrice = Object.values(menu).reduce(function (acc, curr) { return acc += curr; }, 0);
console.log(sumPrice);
var nameOnly = { name: 'iPad Air' };
var priceOnly = { price: 1000000 };
var iPad = { name: 'iPad Air', price: 1000000 };
var empty = {};
// compact 1단계
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// compact 2단계
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }
function fetchUserProfile() {
    var fetchData = {
        username: 'wally',
        email: '123@abc.com',
        imageUrl: 'https://image.image',
    };
    return fetchData;
}
