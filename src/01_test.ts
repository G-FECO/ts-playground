interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
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

const ageData = users.map(user => user.age);
console.log(ageData);

const filteredUsers = users.filter(user => user.age <= 27);
console.log(filteredUsers);