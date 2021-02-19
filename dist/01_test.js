"use strict";
var users = [
    {
        id: 1,
        name: 'wally',
        age: 28,
    },
    {
        id: 2,
        name: 'mory',
        age: 29,
    },
    {
        id: 3,
        name: 'henry',
        age: 27,
    },
    {
        id: 4,
        name: 'tigger',
        age: 27,
    },
];
var ageData = users.map(function (user) { return user.age; });
console.log(ageData);
var filteredUsers = users.filter(function (user) { return user.age <= 27; });
console.log(filteredUsers);
