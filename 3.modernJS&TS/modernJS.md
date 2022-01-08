# modern JS

**var vs let**     
차이점 1: scope
var는 function scope이다. 즉, 함수 내부에서 선언될 경우 선언된 함수 내부에서만 사용 가능하다. 하지만 if문과 같은 블록에 대해서는 별도의 scope를 갖지 않는다. 그에 반해 let은 block scope이기 때문에 선언된 블록 내부, 혹은 그 하위 블록에서만 접근 가능하다. 이러한 특성은 더 깨끗한 코드를 작성하도록 유도한다.

**function**        
arrow function 장점
1) 표현식이 하나인 경우 중괄호와 return문 생략 가능. 
2) 매개변수가 하나인 경우 소괄호를 생략 가능.[매개변수가 하나일 경우만인 거 맞나?]
3) default 값 할당 가능 [arrow function에서만 가능한 거 맞나?]
~~~ts
const add = (a: number, b: number = 1) => a + b;
console.log(add(2)) // 3
~~~

**spread operator**       
~~~ts
const array1 = ['a', 'b', 'c'];
const copiedArray = [...array1];

const object1 = { name: 'a', age: 'b' };
const copiedArray = { ...object1 };
~~~

**rest parameters**
~~~ts
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
    }, 0);
}
// 이처럼 튜플형과 함께 사용할 수도 있다.
const addThree = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
    }, 0);
}
const addedNumbers = add(4, 5, 6, 7);
const addedNumbers2 = addThree(3, 4, 5, 6) // 인자가 3개 초과이기 때문에 오류 발생
~~~
rest parameter를 이용하면 정해지지 않은 다수의 인자를 배열의 형태로 받을 수 있다. push 메소드도 이 rest parameter를 이용했다.

**destructuring**
~~~ts
// Array Destructuring
const hobbies = ['sports', 'cooking', 'skating', 'soccer'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies) // ['sports', 'cooking', 'skating', 'soccer']
console.log(hobby1) // 'sports'
console.log(hobby2) // 'cooking'
console.log(remainingHobbies) // ['skating', 'soccer']

// Object Destructuring
person = {
  firstName: 'Park',
  age: 24
}

const { firstName: username, age } = person;
console.log(person) // { firstName: 'Park', age: 24 }
console.log(firstName) // username으로 바꾸어 받았기 때문에 오류 발생
console.log(username) // 'Park'
console.log(age) // 24
~~~