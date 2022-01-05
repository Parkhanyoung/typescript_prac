## let으로 초기값을 정하지 않고 변수를 선언하는 경우에는 타입을 명시해주자.
~~~ts
function add(n1: number, n2: number) {
  return n1 + n2;
}
let number1;
number1 = '5';
const number2 = 3;
add(number1, number2); // 53
~~~
이처럼 초기값 없이 let 변수 선언을 하는 경우에 타입을 명시하지 않는다면,
처음 설정했던 타입 외의 타입도 받아들여 예상치 못한 결과가 발생할 수 있다.

~~~ts
function add(n1: number, n2: number) {
  return n1 + n2
}
let number1: number;
number = '5'; // 오류 발생
const number2 = 3;
add(number1, number2) // 오류 발생
~~~
따라서 이와 같이 고쳐준다.

~~~ts
let number1 = 12
number1 = '12' // 오류 발생
~~~
초기값과 함께 let으로 변수 선언을 하면, 초기값의 타입이 해당 변수의 타입으로 설정된다[타입 추론]. 
