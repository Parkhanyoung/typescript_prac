let userInput1: unknown;
let userInput2: any;
let userName1: string;
let userName2: string;
// unknown은 any와 유사 but 동작 방식이 다름
// unknown는 any보다는 제한을 가한다. unknown 타입은 다른 타입의 변수에 할당하기 위해서 타입검사를 거쳐야 한다.
// any는 타입 체크를 하지 않게 만드는 것

userInput1 = 'Max';
userInput2 = 'Max';
userName1 = userInput1; // unknown은 별도로 type 검사를 하지 않으면 타입이 설정돼있는 다른 변수에 할당 불가
userName2 = userInput2; // any는 타입 검사에서 제외되므로 자유롭게 할당 가능. 

userInput1 = 123;
userInput2 = 123;
userName1 = userInput1; // unknown은 별도로 type 검사를 하지 않으면 타입이 설정돼있는 다른 변수에 할당 불가
userName2 = userInput2; // any는 타입 검사에서 제외되므로 자유롭게 할당 가능. 

if (typeof userInput1 === 'string') {
  userName1 = userInput1;
} // unknown은 이런 식으로 별도의 type 검사를 해야 한다.

// 오류 반환 함수, 혹은 무한 루프 함수의 경우에는 undefined조차 반환하지 않는다. 그럴 땐 never를 사용한다.
// void로 해도 문제가 발생하진 않지만, 조금 더 명확히 하기 위해서는 never를 사용한다.
function generateError(message: string, code: number): never {
  throw { message, errorCode: code};
  // while (true) { // do something };
}