// ex1) 배열을 받아서 맵드 타입으로 선언하는 경우
// (menu object에 있는 음식들의 가격합 구하기)
const foods = ['noodle', 'rice'];
type Foods = typeof foods[number];

type FoodsPrice = { [Food in Foods]: number };

const menu: FoodsPrice = {
  noodle: 10000,
  rice: 8000,
}

const sumPrice = Object.values(menu).reduce((acc, curr) => acc += curr, 0);
console.log(sumPrice);


// ex2) 객체의 부분 집합을 만족하는 타입으로 변환하는 예제
type Subset<T> = {
  [K in keyof T]?: T[K];
}

interface Product {
  name: string;
  price: number;
}

const nameOnly: Subset<Product> = { name: 'iPad Air' };
const priceOnly: Subset<Product> = { price: 1000000 };
const iPad: Subset<Product> = { name: 'iPad Air', price: 1000000 };
const empty: Subset<Product> = {};


// ex3) API를 호출할 때 맵드 타입 이용
interface UserProfile {
  username: string;
  email: string;
  imageUrl: string;
}

type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  imageUrl?: UserProfile['imageUrl'];
}

// compact 1단계
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// compact 2단계
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

function fetchUserProfile(): UserProfile {
  const fetchData = {
    username: 'wally',
    email: '123@abc.com',
    imageUrl: 'https://image.image',
  }

  return fetchData;
}