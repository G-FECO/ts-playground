"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var me = {};
var you = { email: 'test@abc.com' };
var all = { email: 'capt@hero.com', address: 'Pangyo' };
console.log(me);
console.log(you);
console.log(all);
var human = {
    name: 'No Skill',
};
var hasThen = Promise.resolve(4);
hasThen.then(function (res) { return console.log(res); });
var wally1 = {
    name: 'wally1',
    age: 28,
    address: 'korea'
};
var wally2 = {
    name: 'wally2',
    age: 27,
};
console.log(wally1);
console.log(wally2);
var phoneList = {
    Apple: {
        name: 'iphone',
        rank: 1,
    },
    Samsung: {
        name: 'galaxy',
        rank: 2,
    }
};
console.log(__assign({}, phoneList));
var postUsers = ['wally', 'mory'];
var comments = {
    wally: {
        content: 'hello',
        user: 'wally',
    },
    mory: {
        content: 'nice to meet you',
        user: 'mory',
    },
};
console.log(__assign({}, comments));
