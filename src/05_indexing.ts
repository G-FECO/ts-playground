// 타입스크립트에서 배열과 객체를 인덱싱하는 방법

// ex) 배열 요소 접근
interface UserData {
  name: string;
  age: number;
  gender: 'M' | 'F';
}

// 배열의 인덱스의 타입은 숫자이며 해당 인덱스로 접근시 그 요소의 타입은 UserData이다.
// 만약 readonly를 붙이면 배열의 요소를 변경하지 못하게 할 수 있다.
interface UserArray {
  [index: number]: UserData;
}

const userList: UserArray = [
  {
    name: 'wally',
    age: 28,
    gender: 'M',
  },
  {
    name: 'sally',
    age: 27,
    gender: 'F',
  },
];

console.log(userList[0].name); // 'wally'
console.log(userList[1].age); // '27'
