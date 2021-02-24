// (1) Partial
// 특정 타입의 부분 집합을 만족하는 타입
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {};
const you: MayHaveEmail = { email: 'test@abc.com' };
const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' };

console.log(me);
console.log(you);
console.log(all);


// (2) Pick
// 특정 타입에서 몇 개의 속성을 선택하여 타입 정의
interface Hero {
  name: string;
  skill: string;
  etc: string;
}
const human: Pick<Hero, 'name'> = {
  name: 'No Skill',
};

type HasThen<T> = Pick<Promise<T>, 'then' | 'catch'>;
let hasThen: HasThen<number> = Promise.resolve(4);
hasThen.then(res => console.log(res));


// (3) Omit
// 특정 타입에서 지정된 속성만 제거한 타입
interface UserInfo {
  name: string;
  age: number;
  address: string;
  zipCode: number;
}

const wally1: Omit<UserInfo, 'zipCode'> = {
  name: 'wally1',
  age: 28,
  address: 'korea'
};

const wally2: Omit<UserInfo, 'address' | 'zipCode'> = {
  name: 'wally2',
  age: 27,
};

console.log(wally1);
console.log(wally2);


// (4) Exclude<T, U>
// T 타입들 중 U 타입들과 겹치는 타입 제외
type Fruit = 'apple' | 'banana' | 'melon';
type NewFruit = Exclude<Fruit, 'banana' | 'melon'>; // "apple"


// (5) Extract<T, U>
// T 타입들 중 U 타입들과 겹치는 타입만 가져옴
type User1 = 'aaa' | 'bbb';
type User2 = 'www' | 'xxx' | 'aaa';
type ExtractUser = Extract<User1, User2>; // "aaa"


// (6) Record
// 타입 K, T를 순서대로 받아서 K를 property key 값으로 하는 타입을 만들 수 있다.
interface Phone {
  name: string;
  rank: number;
}

const phoneList: Record<'Apple' | 'Samsung', Phone> = {
  Apple: {
    name: 'iphone',
    rank: 1,
  },
  Samsung: {
    name: 'galaxy',
    rank: 2,
  }
}
console.log({...phoneList});

type Post = {
  content: string,
  user: string
}
const postUsers = ['wally', 'mory'];
type PostArray = typeof postUsers[number];

const comments: Record<PostArray, Post> = {
  wally: {
    content: 'hello',
    user: 'wally',
  },
  mory: {
    content: 'nice to meet you',
    user: 'mory',
  },
}

console.log({...comments});


// (7) NonNullable
// 특정 타입에서 null or undefined를 제외하고 리턴
type InitType = Phone[] | keyof Post | null | undefined | '' | 0;
type NotNullish = NonNullable<InitType>; // "" | 0 | Phone[] | "content" | "user"


// (8) ReturnType
// 함수의 리턴 타입을 가져온다.

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// R 타입에 대해서 타입 추론(infer)이 가능하다면 R 타입을 그렇지 않다면 any 타입을 반환한다.
// 주로 Redux에서 ActionCreator 함수에서 활용한다고 한다.
const func1 = () => ({'name': 'wally', 'age': 28});
type T0 = ReturnType<() => number>; // number
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<typeof func1>; // { name: string; age: number; }
// ReturnType<typeof func> : func에 들어갈 함수 결과의 타입을 가져오는 기능


// (부록) 프론트상에서 백엔드 API 상에서 어떤 타입으로 오겠다고 interface를 정의하지만
// 간혹 예상하지 못하게 undefined나 null 타입이 오는 경우가 발생한다.
// 그래서 이와 같이 타입이 명확하지 않은 경우를 대비하여 Nullable한 타입과 분리하여 Maybe라는 커스텀 유틸리티 타입을 구성할 수 있다.
// 이 때 제네릭으로 원래 정의한 타입을 넣어주면 된다.
type Maybe<T> = T | undefined | null;