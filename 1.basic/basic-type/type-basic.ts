enum Role { ADMIN = 1, READ_ONLY, AUTHOR }

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array
  role: [number, string]; // tuple
  role2: number;
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  role2: Role.ADMIN
};
// * 타입스크립트에서 정의하는 객체 프로퍼티의 타입은 자바스크립트 객체가 아니다.
// * 객체 프로퍼티 타입 선언부를 생략해도 된다. 초기 선언값에 따라 타입추론이 이뤄진다.


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // 스트링이라고 설정해두었기에 오류 X
  console.log(hobby.map()); // 스트링이라고 설정해두었기에 오류 발생
}

person.role[1] = 12; // tuple형으로, string이라고 명시해두었기에 오류 발생
person.role.push('user'); // tuple형도 push까지 체크하지는 못한다.
