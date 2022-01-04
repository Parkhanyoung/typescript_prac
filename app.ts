const person: {
  name: string;
  age: number;
} = {
  name: 'Max',
  age: 30
}

// 타입스크립트에서 정의하는 객체 프로퍼티의 타입은 자바스크립트 객체가 아니다.
// 객체 프로퍼티 타입 선언부를 생략해도 된다. 초기 선언값에 따라 타입추론이 이뤄진다.

console.log(person.name);
